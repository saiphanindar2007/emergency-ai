export function getEmergencyGuidance(type, symptom) {
  // ======================
  // 🚑 ACCIDENT CASES
  // ======================

  if (type === "Accident" && symptom === "Unconscious") {
    return {
      severity: "CRITICAL",
      confidence: 0.96,
      actions: [
        "Call emergency services immediately (112)",
        "Check breathing and pulse",
        "Place the person on their side",
        "Loosen tight clothing",
        "Monitor until help arrives",
      ],
      doNot: [
        "Do NOT give food or water",
        "Do NOT shake the person",
      ],
      reasoning:
        "Loss of consciousness after an accident may indicate head injury or internal trauma.",
    };
  }

  if (type === "Accident" && symptom === "Heavy Bleeding") {
    return {
      severity: "CRITICAL",
      confidence: 0.95,
      actions: [
        "Apply firm pressure to the wound",
        "Use clean cloth or bandage",
        "Elevate the injured area if possible",
        "Call emergency services immediately",
      ],
      doNot: [
        "Do NOT remove deeply embedded objects",
        "Do NOT wash deep wounds aggressively",
      ],
      reasoning:
        "Severe bleeding can lead to rapid blood loss and shock.",
    };
  }

  if (type === "Accident" && symptom === "Fracture") {
    return {
      severity: "HIGH",
      confidence: 0.9,
      actions: [
        "Immobilize the injured area",
        "Apply a cold compress",
        "Avoid unnecessary movement",
        "Seek medical attention immediately",
      ],
      doNot: [
        "Do NOT try to realign the bone",
        "Do NOT allow the person to walk",
      ],
      reasoning:
        "Improper handling of fractures can worsen injury and cause complications.",
    };
  }

  if (type === "Accident" && symptom === "Minor Injury") {
    return {
      severity: "LOW",
      confidence: 0.75,
      actions: [
        "Clean the wound gently",
        "Apply antiseptic",
        "Cover with a clean bandage",
        "Monitor for infection",
      ],
      doNot: [
        "Do NOT ignore worsening pain or swelling",
      ],
      reasoning:
        "Minor injuries usually heal with basic first aid if monitored properly.",
    };
  }

  // ======================
  // 🏥 MEDICAL CASES
  // ======================

  if (type === "Medical" && symptom === "Breathing Difficulty") {
    return {
      severity: "HIGH",
      confidence: 0.92,
      actions: [
        "Help the person sit upright",
        "Loosen tight clothing",
        "Encourage slow breathing",
        "Call emergency services if condition worsens",
      ],
      doNot: [
        "Do NOT make the person lie flat",
      ],
      reasoning:
        "Breathing difficulty may indicate asthma, allergy, or cardiac issues.",
    };
  }

  if (type === "Medical" && symptom === "Chest Pain") {
    return {
      severity: "CRITICAL",
      confidence: 0.97,
      actions: [
        "Call emergency services immediately",
        "Help the person sit and stay calm",
        "Loosen tight clothing",
      ],
      doNot: [
        "Do NOT give food or drink",
        "Do NOT leave the person alone",
      ],
      reasoning:
        "Chest pain can be a sign of heart attack and requires urgent care.",
    };
  }

  // ======================
  // 🔥 FIRE CASES
  // ======================

  if (type === "Fire" && symptom === "Burns") {
    return {
      severity: "HIGH",
      confidence: 0.9,
      actions: [
        "Move away from the fire source",
        "Cool the burn with running water",
        "Cover with a clean cloth",
        "Seek medical attention",
      ],
      doNot: [
        "Do NOT apply ice directly",
        "Do NOT burst blisters",
      ],
      reasoning:
        "Burn injuries can worsen without immediate cooling and care.",
    };
  }

  if (type === "Fire" && symptom === "Smoke Inhalation") {
    return {
      severity: "CRITICAL",
      confidence: 0.94,
      actions: [
        "Move to fresh air immediately",
        "Call emergency services",
        "Monitor breathing closely",
      ],
      doNot: [
        "Do NOT re-enter the fire area",
      ],
      reasoning:
        "Smoke inhalation can cause airway damage and oxygen deprivation.",
    };
  }

  if (type === "Other") {
    return {
      severity: "CRITICAL",
      confidence: 0.85,
      actions: [
        "Call emergency services immediately (112)",
        "Ensure your own safety first",
        "Stay with the person if safe",
        "Follow instructions from emergency responders",
      ],
      doNot: [
        "Do NOT leave the person alone",
        "Do NOT attempt risky interventions",
      ],
      reasoning:
        "When the emergency type is unclear, immediate escalation ensures the fastest professional response.",
    };
  }


  // ======================
  // ❓ FALLBACK
  // ======================

  return {
    severity: "UNKNOWN",
    confidence: 0.6,
    actions: [
      "Ensure scene safety",
      "Call emergency services immediately",
      "Follow instructions from professionals",
    ],
    doNot: [],
    reasoning:
      "Insufficient information provided. Escalation is the safest approach.",
  };
}
