export function getEmergencyGuidance(type, symptom) {
  // DEFAULT RESPONSE
  const base = {
    severity: "UNKNOWN",
    confidence: 0.6,
    actions: [
      "Call emergency services immediately.",
      "Stay calm and ensure safety.",
    ],
    doNot: [],
    reasoning: "Insufficient information. Emergency response recommended.",
    callNow: true,
  };

  // ACCIDENT CASES
  if (type === "Accident" && symptom === "Unconscious") {
    return {
      severity: "CRITICAL",
      confidence: 0.95,
      actions: [
        "Call emergency services (108) immediately.",
        "Check if the person is breathing.",
        "Place the person on their side.",
        "Loosen tight clothing.",
        "Stay with the person until help arrives.",
      ],
      doNot: [
        "Do NOT give food or water.",
        "Do NOT shake the person.",
      ],
      reasoning: "Unconsciousness after an accident is life-threatening.",
      callNow: true,
    };
  }

  if (type === "Accident" && symptom === "Heavy Bleeding") {
    return {
      severity: "HIGH",
      confidence: 0.9,
      actions: [
        "Apply firm pressure to stop bleeding.",
        "Use a clean cloth or bandage.",
        "Keep the injured area elevated.",
        "Call emergency services if bleeding continues.",
      ],
      doNot: [
        "Do NOT remove deeply embedded objects.",
      ],
      reasoning: "Heavy bleeding can cause shock if untreated.",
      callNow: true,
    };
  }

  if (type === "Accident" && symptom === "Fall") {
    return {
      severity: "HIGH",
      confidence: 0.9,
      actions: [
        "Keep the person still.",
        "Check for visible injuries.",
        "Apply gentle pressure if bleeding."
      ],
      doNot: [
        "Do NOT move the person unnecessarily.",
        "Do NOT massage injured areas."
      ],
      reasoning: "Falls may cause internal injuries that are not immediately visible.",
      callNow: true,
    };
  }

  if (type === "Accident" && symptom === "Fracture") {
    return {
      severity: "HIGH",
      confidence: 0.88,
      actions: [
        "Immobilize the injured area.",
        "Apply cold pack if swelling is present.",
        "Seek medical help immediately."
      ],
      doNot: [
        "Do NOT try to realign the bone.",
      ],
      reasoning: "Fractures require professional medical treatment.",
      callNow: true,
    };
  }

  if (type === "Accident" && symptom === "Minor Injury") {
    return {
      severity: "LOW",
      confidence: 0.8,
      actions: [
        "Clean the wound with clean water.",
        "Apply a clean bandage.",
        "Monitor for swelling or pain."
      ],
      doNot: [],
      reasoning: "Minor injuries usually do not require emergency care.",
      callNow: false,
    };
  }

  // MEDICAL CASES
  if (type === "Medical" && symptom === "Breathing Difficulty") {
    return {
      severity: "HIGH",
      confidence: 0.95,
      actions: [
        "Help the person sit upright.",
        "Loosen tight clothing.",
        "Encourage slow breathing.",
        "Call emergency services immediately.",
      ],
      doNot: [
        "Do NOT lay the person flat.",
      ],
      reasoning: "Breathing difficulty indicates respiratory distress.",
      callNow: true,
    };
  }

  if (type === "Medical" && symptom === "Severe Pain") {
    return {
      severity: "HIGH",
      confidence: 0.85,
      actions: [
        "Help the person rest comfortably.",
        "Monitor symptoms closely.",
        "Call emergency services if pain worsens.",
      ],
      doNot: [
        "Do NOT give unknown medications.",
      ],
      reasoning: "Severe pain may indicate internal injury.",
      callNow: true,
    };
  }

  if (type === "Medical" && symptom === "Chest Pain") {
    return {
      severity: "CRITICAL",
      confidence: 0.97,
      actions: [
        "Help the person sit or lie down comfortably.",
        "Loosen tight clothing.",
        "Keep the person calm and still."
      ],
      doNot: [
        "Do NOT let the person walk.",
        "Do NOT give food or drink."
      ],
      reasoning: "Chest pain may indicate a heart-related emergency.",
      callNow: true,
    };
  }

  if (type === "Medical" && symptom === "Panic Attack") {
    return {
      severity: "LOW",
      confidence: 0.9,
      actions: [
        "Encourage slow, deep breathing.",
        "Move to a quiet and safe place.",
        "Stay with the person and reassure them."
      ],
      doNot: [
        "Do NOT shout or panic.",
        "Do NOT crowd the person."
      ],
      reasoning: "Panic attacks are distressing but usually not life-threatening.",
      callNow: false,
    };
  }

  if (type === "Medical" && symptom === "Seizure") {
    return {
      severity: "HIGH",
      confidence: 0.93,
      actions: [
        "Clear nearby objects to prevent injury.",
        "Place the person on their side after the seizure stops.",
        "Time the seizure if possible."
      ],
      doNot: [
        "Do NOT restrain movements.",
        "Do NOT put anything in the mouth."
      ],
      reasoning: "Seizures require medical evaluation, especially if prolonged.",
      callNow: true,
    };
  }

  // FIRE
  if (type === "Fire" && (symptom === "Burns" || symptom === "Smoke Inhalation")){
    return {
      severity: "CRITICAL",
      confidence: 0.98,
      actions: [
        "Move away from fire immediately.",
        "Avoid inhaling smoke.",
        "Call emergency services (108).",
      ],
      doNot: [
        "Do NOT use elevators.",
      ],
      reasoning: "Fire emergencies are immediately life-threatening.",
      callNow: true,
    };
  }

  // OTHER
  if (type === "Other") {
    return {
      severity: "UNKNOWN",
      confidence: 0.7,
      actions: [
        "Assess the situation carefully.",
        "Ensure your own safety.",
        "Call emergency services if unsure.",
      ],
      doNot: [],
      reasoning: "Uncategorized emergency. Human judgment required.",
      callNow: true,
    };
  }

  return base;
}
