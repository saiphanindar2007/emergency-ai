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
    reasoning: "This situation cannot be clearly categorized and may involve unknown risks. The guidance prioritizes personal safety and escalation to emergency services.",
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
      reasoning: "This situation is classified as CRITICAL because loss of consciousness after an accident indicates possible head or internal injury. The guidance prioritizes airway safety and immediate emergency response.",
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
      reasoning: "This situation is classified as HIGH severity because uncontrolled bleeding can lead to shock. The guidance prioritizes bleeding control and rapid medical assistance.",
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
      reasoning: "This situation is classified as HIGH severity because falls may cause internal injuries that are not immediately visible. The guidance prioritizes minimizing movement and injury assessment.",
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
      reasoning: "This situation is classified as HIGH severity due to the risk of bone displacement and further tissue damage. The guidance prioritizes immobilization and medical evaluation.",
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
      reasoning: "This situation is classified as LOW severity because no immediate life-threatening risk is detected. The guidance focuses on basic wound care and monitoring.",
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
      reasoning: "This situation is classified as HIGH severity because breathing difficulty indicates respiratory distress. The guidance prioritizes airway support and urgent medical attention.",
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
      reasoning: "This situation is classified as HIGH severity because severe pain can indicate internal injury or an underlying medical condition. The guidance prioritizes rest, monitoring, and escalation if symptoms worsen.",
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
      reasoning: "This situation is classified as CRITICAL because chest pain may indicate a heart-related emergency. The guidance prioritizes keeping the person still and immediate medical response.",
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
      reasoning: "This situation is classified as LOW severity because panic attacks are usually not life-threatening. The guidance focuses on calming techniques and reassurance.",
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
      reasoning: "This situation is classified as HIGH severity because seizures can lead to injury or prolonged unconsciousness. The guidance prioritizes safety and post-seizure care.",
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
      reasoning: "This situation is classified as CRITICAL because fire and smoke exposure pose immediate life-threatening risks. The guidance prioritizes evacuation and emergency services.",
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
      reasoning: "This situation cannot be clearly categorized and may involve unknown risks. The guidance prioritizes personal safety and escalation to emergency services.",
      callNow: true,
    };
  }

  return base;
}
