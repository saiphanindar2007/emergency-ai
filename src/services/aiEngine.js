export function getEmergencyGuidance(type, symptom) {
  const base = {
    severity: "UNKNOWN",
    confidence: 0.6,
    actions: ["general_call_emergency", "general_stay_safe"],
    doNot: [],
    reasoning: "general_unknown_reason",
    callNow: true,
  };

  // ================= ACCIDENT =================

  if (type === "Accident" && symptom === "Unconscious") {
    return {
      severity: "CRITICAL",
      confidence: 0.95,
      actions: [
        "accident_unconscious_check_breathing",
        "accident_unconscious_recovery_position",
        "accident_unconscious_loosen_clothes",
        "call_108",
      ],
      doNot: [
        "accident_unconscious_no_food",
        "accident_unconscious_no_shake",
      ],
      reasoning: "accident_unconscious_reason",
      callNow: true,
    };
  }

  if (type === "Accident" && symptom === "Heavy Bleeding") {
    return {
      severity: "HIGH",
      confidence: 0.9,
      actions: [
        "bleeding_apply_pressure",
        "bleeding_use_clean_cloth",
        "bleeding_elevate_area",
        "call_108",
      ],
      doNot: ["bleeding_no_remove_objects"],
      reasoning: "bleeding_high_reason",
      callNow: true,
    };
  }

  if (type === "Accident" && symptom === "Fall") {
    return {
      severity: "HIGH",
      confidence: 0.9,
      actions: [
        "fall_keep_still",
        "fall_check_injuries",
      ],
      doNot: [
        "fall_no_move_unnecessarily",
        "fall_no_massage",
      ],
      reasoning: "fall_high_reason",
      callNow: true,
    };
  }

  if (type === "Accident" && symptom === "Fracture") {
    return {
      severity: "HIGH",
      confidence: 0.88,
      actions: [
        "fracture_immobilize",
        "fracture_apply_cold",
        "call_108",
      ],
      doNot: ["fracture_no_realign"],
      reasoning: "fracture_high_reason",
      callNow: true,
    };
  }

  if (type === "Accident" && symptom === "Minor Injury") {
    return {
      severity: "LOW",
      confidence: 0.8,
      actions: [
        "minor_clean_wound",
        "minor_apply_bandage",
        "minor_monitor",
      ],
      doNot: [],
      reasoning: "minor_low_reason",
      callNow: false,
    };
  }

  // ================= MEDICAL =================

  if (type === "Medical" && symptom === "Breathing Difficulty") {
    return {
      severity: "HIGH",
      confidence: 0.95,
      actions: [
        "breathing_sit_upright",
        "breathing_loosen_clothes",
        "breathing_slow_breath",
        "call_108",
      ],
      doNot: ["breathing_no_flat"],
      reasoning: "breathing_high_reason",
      callNow: true,
    };
  }

  if (type === "Medical" && symptom === "Severe Pain") {
    return {
      severity: "HIGH",
      confidence: 0.85,
      actions: [
        "pain_rest",
        "pain_monitor",
        "call_if_worse",
      ],
      doNot: ["pain_no_unknown_meds"],
      reasoning: "pain_high_reason",
      callNow: true,
    };
  }

  if (type === "Medical" && symptom === "Chest Pain") {
    return {
      severity: "CRITICAL",
      confidence: 0.97,
      actions: [
        "chest_help_sit",
        "chest_loosen_clothes",
        "chest_keep_calm",
        "call_108",
      ],
      doNot: [
        "chest_no_walk",
        "chest_no_food",
      ],
      reasoning: "chest_critical_reason",
      callNow: true,
    };
  }

  if (type === "Medical" && symptom === "Panic Attack") {
    return {
      severity: "LOW",
      confidence: 0.9,
      actions: [
        "panic_slow_breathing",
        "panic_quiet_place",
        "panic_reassure",
      ],
      doNot: [
        "panic_no_shout",
        "panic_no_crowd",
      ],
      reasoning: "panic_low_reason",
      callNow: false,
    };
  }

  if (type === "Medical" && symptom === "Seizure") {
    return {
      severity: "HIGH",
      confidence: 0.93,
      actions: [
        "seizure_clear_area",
        "seizure_recovery_position",
        "seizure_time",
      ],
      doNot: [
        "seizure_no_restrain",
        "seizure_no_mouth",
      ],
      reasoning: "seizure_high_reason",
      callNow: true,
    };
  }

  // ================= FIRE =================

  if (type === "Fire" && (symptom === "Burns" || symptom === "Smoke Inhalation")) {
    return {
      severity: "CRITICAL",
      confidence: 0.98,
      actions: [
        "fire_move_away",
        "fire_avoid_smoke",
        "call_108",
      ],
      doNot: ["fire_no_elevator"],
      reasoning: "fire_critical_reason",
      callNow: true,
    };
  }

  // ================= OTHER =================

  if (type === "Other") {
    return {
      severity: "UNKNOWN",
      confidence: 0.7,
      actions: [
        "other_assess",
        "other_ensure_safety",
        "call_108",
      ],
      doNot: [],
      reasoning: "other_unknown_reason",
      callNow: true,
    };
  }

  return base;
}
