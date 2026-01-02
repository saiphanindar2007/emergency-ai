export const translations = {
  /* =========================================================
     ======================= ENGLISH =========================
     ========================================================= */
  en: {
    /* ---------- HOME ---------- */
    app_title: "AI Emergency Assistant",
    app_description:
      "Get clear, AI-driven emergency decisions in the first critical moments — when panic makes thinking difficult.",
    start_emergency: "PANIC",
    home_disclaimer:
      "Designed for speed, clarity, and responsible AI decision-making.",

    /* ---------- EMERGENCY PAGE ---------- */
    emergency_details: "Emergency Details",
    emergency_hint:
      "Select what best describes the situation. The AI will decide what to do next.",
    emergency_type: "Emergency Type",
    select_type: "Select type",
    symptoms: "Symptoms",
    select_symptom: "Select symptom",
    get_decision: "GET AI DECISION",
    voice_input: "Use Voice Input",
    listening: "Listening...",
    voice_help: "Optional voice input for faster emergency reporting",

    Accident: "Accident",
    Medical: "Medical",
    Fire: "Fire",
    Other: "Other",

    Unconscious: "Unconscious",
    "Heavy Bleeding": "Heavy Bleeding",
    Fall: "Fall",
    Fracture: "Fracture",
    "Minor Injury": "Minor Injury",
    "Breathing Difficulty": "Breathing Difficulty",
    "Severe Pain": "Severe Pain",
    "Chest Pain": "Chest Pain",
    "Panic Attack": "Panic Attack",
    Seizure: "Seizure",
    Burns: "Burns",
    "Smoke Inhalation": "Smoke Inhalation",

    /* ---------- DECISION PAGE ---------- */
    decision_title: "AI Emergency Guidance",
    analyzing: "Analyzing situation and deciding next steps...",
    emergency_type_label: "Emergency Type",
    symptom_label: "Symptom",

    severity: "Severity",
    severity_CRITICAL: "CRITICAL",
    severity_HIGH: "HIGH",
    severity_LOW: "LOW",
    severity_UNKNOWN: "UNKNOWN",

    immediate_action: "Immediate action required",
    urgent_attention: "Urgent attention needed",
    guided_assistance: "Guided assistance",

    guidance_note:
      "Guidance is optimized to reduce confusion during high-stress situations.",

    ai_confidence: "AI Confidence",
    high_confidence: "High confidence decision",
    moderate_confidence: "Moderate confidence decision",
    low_confidence: "Low confidence — human assistance recommended",
    low_confidence_warning:
      "The system is operating with limited confidence. Please prioritize professional emergency services.",

    logged: "Emergency event securely logged to Firebase",
    missing_info: "Missing emergency information.",

    what_to_do: "What to do now",
    do_not: "Do NOT",
    why_decision: "Why this decision?",

    cta_call_108: "Call Emergency Services (108)",
    cta_call_112: "Call Emergency Services (112)",

    decision_disclaimer:
      "This system provides decision support and does not replace professional emergency services.",

    /* ---------- GENERAL ACTIONS ---------- */
    general_call_emergency: "Call emergency services immediately.",
    general_stay_safe: "Stay calm and ensure safety.",
    general_unknown_reason:
      "Insufficient information. Emergency response is recommended.",

    /* ---------- ACCIDENT ACTIONS ---------- */
    accident_unconscious_check_breathing: "Check if the person is breathing.",
    accident_unconscious_recovery_position:
      "Place the person in the recovery position.",
    accident_unconscious_loosen_clothes: "Loosen tight clothing.",
    accident_unconscious_no_food: "Do NOT give food or water.",
    accident_unconscious_no_shake: "Do NOT shake the person.",

    bleeding_apply_pressure: "Apply firm pressure to stop bleeding.",
    bleeding_use_clean_cloth: "Use a clean cloth or bandage.",
    bleeding_elevate_area: "Keep the injured area elevated.",
    bleeding_no_remove_objects:
      "Do NOT remove deeply embedded objects.",

    fall_keep_still: "Keep the person still.",
    fall_check_injuries: "Check for visible injuries.",
    fall_no_move_unnecessarily:
      "Do NOT move the person unnecessarily.",
    fall_no_massage: "Do NOT massage injured areas.",

    fracture_immobilize: "Immobilize the injured area.",
    fracture_apply_cold: "Apply a cold pack to reduce swelling.",
    fracture_no_realign: "Do NOT try to realign the bone.",

    minor_clean_wound: "Clean the wound with clean water.",
    minor_apply_bandage: "Apply a clean bandage.",
    minor_monitor: "Monitor for swelling or pain.",

    /* ---------- MEDICAL ACTIONS ---------- */
    breathing_sit_upright: "Help the person sit upright.",
    breathing_loosen_clothes: "Loosen tight clothing.",
    breathing_slow_breath: "Encourage slow, steady breathing.",
    breathing_no_flat: "Do NOT lay the person flat.",

    pain_rest: "Help the person rest comfortably.",
    pain_monitor: "Monitor symptoms closely.",
    call_if_worse: "Call emergency services if pain worsens.",
    pain_no_unknown_meds:
      "Do NOT give unknown medications.",

    chest_help_sit: "Help the person sit or lie down comfortably.",
    chest_loosen_clothes: "Loosen tight clothing.",
    chest_keep_calm: "Keep the person calm and still.",
    chest_no_walk: "Do NOT let the person walk.",
    chest_no_food: "Do NOT give food or drink.",

    panic_slow_breathing: "Encourage slow, deep breathing.",
    panic_quiet_place: "Move to a quiet and safe place.",
    panic_reassure: "Stay with the person and reassure them.",
    panic_no_shout: "Do NOT shout or panic.",
    panic_no_crowd: "Do NOT crowd the person.",

    seizure_clear_area: "Clear nearby objects to prevent injury.",
    seizure_recovery_position:
      "Place the person on their side after the seizure.",
    seizure_time: "Time the seizure if possible.",
    seizure_no_restrain: "Do NOT restrain movements.",
    seizure_no_mouth: "Do NOT put anything in the mouth.",

    /* ---------- FIRE ACTIONS ---------- */
    fire_move_away: "Move away from fire immediately.",
    fire_avoid_smoke: "Avoid inhaling smoke.",
    fire_no_elevator: "Do NOT use elevators.",

    /* ---------- OTHER ---------- */
    other_assess: "Assess the situation carefully.",
    other_ensure_safety: "Ensure your own safety.",

    /* ---------- REASONING : ACCIDENT ---------- */
    accident_unconscious_reason:
      "This situation is classified as CRITICAL because loss of consciousness after an accident may indicate head or internal injury. This guidance prioritizes airway safety and immediate emergency response.",

    bleeding_high_reason:
      "This situation is classified as HIGH because uncontrolled bleeding can lead to shock. This guidance prioritizes bleeding control and urgent medical assistance.",

    fall_high_reason:
      "This situation is classified as HIGH because falls may cause internal injuries that are not immediately visible. This guidance prioritizes minimizing movement and injury assessment.",

    fracture_high_reason:
      "This situation is classified as HIGH because fractures can worsen without proper immobilization. This guidance prioritizes stabilizing the injury and medical evaluation.",

    minor_low_reason:
      "This situation is classified as LOW because no immediate life-threatening risk is detected. This guidance focuses on basic wound care and monitoring.",

    /* ---------- REASONING : MEDICAL ---------- */
    breathing_high_reason:
      "This situation is classified as HIGH because breathing difficulty indicates possible respiratory distress. This guidance prioritizes airway support and urgent medical care.",

    pain_high_reason:
      "This situation is classified as HIGH because severe pain may indicate an underlying medical condition. This guidance prioritizes monitoring and escalation if symptoms worsen.",

    chest_critical_reason:
      "This situation is classified as CRITICAL because chest pain may indicate a heart-related emergency. This guidance prioritizes keeping the person still and immediate medical response.",

    panic_low_reason:
      "This situation is classified as LOW because panic attacks are generally not life-threatening. This guidance focuses on calming techniques and reassurance.",

    seizure_high_reason:
      "This situation is classified as HIGH because seizures may result in injury or prolonged unconsciousness. This guidance prioritizes safety and post-seizure care.",

    /* ---------- REASONING : FIRE ---------- */
    fire_critical_reason:
      "This situation is classified as CRITICAL because fire and smoke exposure pose immediate life-threatening risks. This guidance prioritizes evacuation and emergency services.",

    /* ---------- REASONING : OTHER ---------- */
    other_unknown_reason:
      "This situation is classified as UNKNOWN because the emergency cannot be clearly identified. This guidance prioritizes personal safety and contacting emergency services.",
  },

  /* =========================================================
     ======================= HINDI ============================
     ========================================================= */
  hi: {
    /* HOME */
    app_title: "एआई आपातकालीन सहायक",
    app_description:
      "घबराहट के क्षणों में स्पष्ट और त्वरित आपातकालीन निर्णय प्राप्त करें।",
    start_emergency: "आपातकाल शुरू करें",
    home_disclaimer:
      "तेज़, स्पष्ट और जिम्मेदार एआई निर्णय के लिए डिज़ाइन किया गया।",

    emergency_details: "आपातकाल विवरण",
    emergency_hint:
      "स्थिति चुनें। एआई तय करेगा कि आगे क्या करना है।",
    emergency_type: "आपातकाल का प्रकार",
    select_type: "प्रकार चुनें",
    symptoms: "लक्षण",
    select_symptom: "लक्षण चुनें",
    get_decision: "एआई निर्णय प्राप्त करें",
    voice_input: "वॉयस इनपुट उपयोग करें",
    listening: "सुन रहा है...",
    voice_help: "तेज़ रिपोर्टिंग के लिए वैकल्पिक वॉयस इनपुट",

    Accident: "दुर्घटना",
    Medical: "चिकित्सा",
    Fire: "आग",
    Other: "अन्य",

    Unconscious: "बेहोश",
    "Heavy Bleeding": "अत्यधिक रक्तस्राव",
    Fall: "गिरना",
    Fracture: "फ्रैक्चर",
    "Minor Injury": "हल्की चोट",
    "Breathing Difficulty": "सांस लेने में कठिनाई",
    "Severe Pain": "तेज़ दर्द",
    "Chest Pain": "सीने में दर्द",
    "Panic Attack": "घबराहट का दौरा",
    Seizure: "दौरा",
    Burns: "जलन",
    "Smoke Inhalation": "धुएँ का असर",

    decision_title: "एआई आपातकालीन मार्गदर्शन",
    analyzing: "स्थिति का विश्लेषण किया जा रहा है...",
    emergency_type_label: "आपातकाल का प्रकार",
    symptom_label: "लक्षण",

    severity: "गंभीरता",
    severity_CRITICAL: "गंभीर",
    severity_HIGH: "उच्च",
    severity_LOW: "निम्न",
    severity_UNKNOWN: "अज्ञात",

    immediate_action: "तत्काल कार्रवाई आवश्यक",
    urgent_attention: "तुरंत ध्यान आवश्यक",
    guided_assistance: "निर्देशित सहायता",

    guidance_note:
      "यह मार्गदर्शन तनावपूर्ण परिस्थितियों में भ्रम को कम करता है।",

    ai_confidence: "एआई आत्मविश्वास",
    high_confidence: "उच्च आत्मविश्वास निर्णय",
    moderate_confidence: "मध्यम आत्मविश्वास निर्णय",
    low_confidence: "कम आत्मविश्वास — मानव सहायता आवश्यक",
    low_confidence_warning:
      "कम आत्मविश्वास। कृपया आपातकालीन सेवाओं को प्राथमिकता दें।",

    logged: "आपातकाल Firebase में सुरक्षित रूप से दर्ज किया गया",
    missing_info: "आपातकालीन जानकारी उपलब्ध नहीं है।",

    what_to_do: "अब क्या करें",
    do_not: "ये न करें",
    why_decision: "यह निर्णय क्यों?",

    cta_call_108: "आपातकालीन सेवा कॉल करें (108)",
    cta_call_112: "आपातकालीन सेवा कॉल करें (112)",

    decision_disclaimer:
      "यह प्रणाली केवल सहायता प्रदान करती है, पेशेवर सेवाओं का विकल्प नहीं है।",
    
    /* ---------- GENERAL ACTIONS ---------- */
    general_call_emergency: "तुरंत आपातकालीन सेवाओं को कॉल करें।",
    general_stay_safe: "शांत रहें और सुरक्षा सुनिश्चित करें।",
    general_unknown_reason:
      "पर्याप्त जानकारी नहीं है। आपातकालीन प्रतिक्रिया की सिफारिश की जाती है।",

    /* ---------- ACCIDENT ACTIONS ---------- */
    accident_unconscious_check_breathing:
      "जांच करें कि व्यक्ति सांस ले रहा है या नहीं।",
    accident_unconscious_recovery_position:
      "व्यक्ति को रिकवरी पोज़िशन में रखें।",
    accident_unconscious_loosen_clothes:
      "कसे हुए कपड़े ढीले करें।",
    accident_unconscious_no_food:
      "खाना या पानी न दें।",
    accident_unconscious_no_shake:
      "व्यक्ति को झकझोरें नहीं।",

    bleeding_apply_pressure:
      "रक्तस्राव रोकने के लिए दबाव डालें।",
    bleeding_use_clean_cloth:
      "साफ कपड़े या पट्टी का उपयोग करें।",
    bleeding_elevate_area:
      "घायल हिस्से को ऊपर रखें।",
    bleeding_no_remove_objects:
      "गहराई में फंसी वस्तुओं को न निकालें।",

    fall_keep_still:
      "व्यक्ति को स्थिर रखें।",
    fall_check_injuries:
      "दृश्यमान चोटों की जांच करें।",
    fall_no_move_unnecessarily:
      "बिना आवश्यकता व्यक्ति को न हिलाएं।",
    fall_no_massage:
      "घायल हिस्सों की मालिश न करें।",

    fracture_immobilize:
      "घायल हिस्से को स्थिर करें।",
    fracture_apply_cold:
      "सूजन कम करने के लिए ठंडी पट्टी लगाएं।",
    fracture_no_realign:
      "हड्डी को सीधा करने की कोशिश न करें।",

    minor_clean_wound:
      "घाव को साफ पानी से साफ करें।",
    minor_apply_bandage:
      "साफ पट्टी लगाएं।",
    minor_monitor:
      "सूजन या दर्द पर नज़र रखें।",

    /* ---------- MEDICAL ACTIONS ---------- */
    breathing_sit_upright:
      "व्यक्ति को सीधा बैठने में मदद करें।",
    breathing_loosen_clothes:
      "कसे हुए कपड़े ढीले करें।",
    breathing_slow_breath:
      "धीमी और गहरी सांस लेने के लिए कहें।",
    breathing_no_flat:
      "व्यक्ति को सीधा न लिटाएं।",

    pain_rest:
      "व्यक्ति को आराम करने दें।",
    pain_monitor:
      "लक्षणों पर ध्यान रखें।",
    call_if_worse:
      "दर्द बढ़ने पर आपातकालीन सेवाओं को कॉल करें।",
    pain_no_unknown_meds:
      "अज्ञात दवाइयाँ न दें।",

    chest_help_sit:
      "व्यक्ति को आराम से बैठाएं या लिटाएं।",
    chest_loosen_clothes:
      "कसे हुए कपड़े ढीले करें।",
    chest_keep_calm:
      "व्यक्ति को शांत और स्थिर रखें।",
    chest_no_walk:
      "व्यक्ति को चलने न दें।",
    chest_no_food:
      "खाना या पानी न दें।",

    panic_slow_breathing:
      "धीमी और गहरी सांस लेने के लिए कहें।",
    panic_quiet_place:
      "शांत और सुरक्षित स्थान पर ले जाएं।",
    panic_reassure:
      "व्यक्ति के साथ रहें और उसे आश्वस्त करें।",
    panic_no_shout:
      "चिल्लाएं नहीं या घबराएं नहीं।",
    panic_no_crowd:
      "व्यक्ति के आसपास भीड़ न लगाएं।",

    seizure_clear_area:
      "आसपास की वस्तुएं हटाएं ताकि चोट न लगे।",
    seizure_recovery_position:
      "दौरा समाप्त होने के बाद व्यक्ति को करवट पर रखें।",
    seizure_time:
      "यदि संभव हो तो दौरे का समय नोट करें।",
    seizure_no_restrain:
      "दौरे के दौरान व्यक्ति को न रोकें।",
    seizure_no_mouth:
      "मुंह में कुछ भी न डालें।",

    /* ---------- FIRE ACTIONS ---------- */
    fire_move_away:
      "तुरंत आग से दूर जाएं।",
    fire_avoid_smoke:
      "धुएं को सांस में न लें।",
    fire_no_elevator:
      "लिफ्ट का उपयोग न करें।",

    /* ---------- OTHER ---------- */
    other_assess:
      "स्थिति का सावधानीपूर्वक आकलन करें।",
    other_ensure_safety:
      "अपनी सुरक्षा सुनिश्चित करें।",

    accident_unconscious_reason:
      "यह स्थिति गंभीर है क्योंकि दुर्घटना के बाद बेहोशी सिर या आंतरिक चोट का संकेत हो सकती है। यह मार्गदर्शन श्वसन सुरक्षा और त्वरित आपातकालीन प्रतिक्रिया को प्राथमिकता देता है।",

    bleeding_high_reason:
      "यह स्थिति उच्च श्रेणी की है क्योंकि अत्यधिक रक्तस्राव से शॉक हो सकता है। यह मार्गदर्शन रक्तस्राव रोकने और त्वरित चिकित्सा सहायता पर केंद्रित है।",

    fall_high_reason:
      "यह स्थिति उच्च श्रेणी की है क्योंकि गिरने से आंतरिक चोटें हो सकती हैं जो तुरंत दिखाई नहीं देतीं। यह मार्गदर्शन अनावश्यक गति को रोकने पर केंद्रित है।",

    fracture_high_reason:
      "यह स्थिति उच्च श्रेणी की है क्योंकि फ्रैक्चर बिना स्थिरीकरण के बिगड़ सकता है। यह मार्गदर्शन चोट को स्थिर करने और चिकित्सा जांच को प्राथमिकता देता है।",

    minor_low_reason:
      "यह स्थिति निम्न श्रेणी की है क्योंकि कोई तत्काल जीवन-घातक खतरा नहीं है। यह मार्गदर्शन बुनियादी देखभाल और निगरानी पर केंद्रित है।",

    breathing_high_reason:
      "यह स्थिति उच्च श्रेणी की है क्योंकि सांस लेने में कठिनाई श्वसन संकट का संकेत हो सकती है। यह मार्गदर्शन श्वसन सहायता को प्राथमिकता देता है।",

    pain_high_reason:
      "यह स्थिति उच्च श्रेणी की है क्योंकि तेज दर्द किसी गंभीर समस्या का संकेत हो सकता है। यह मार्गदर्शन निगरानी और आवश्यकता पड़ने पर सहायता बढ़ाने पर केंद्रित है।",

    chest_critical_reason:
      "यह स्थिति गंभीर है क्योंकि सीने में दर्द हृदय आपातकाल का संकेत हो सकता है। यह मार्गदर्शन व्यक्ति को स्थिर रखने और त्वरित चिकित्सा सहायता पर केंद्रित है।",

    panic_low_reason:
      "यह स्थिति निम्न श्रेणी की है क्योंकि पैनिक अटैक आमतौर पर जानलेवा नहीं होते। यह मार्गदर्शन व्यक्ति को शांत करने पर केंद्रित है।",

    seizure_high_reason:
      "यह स्थिति उच्च श्रेणी की है क्योंकि दौरे से चोट या लंबे समय तक बेहोशी हो सकती है। यह मार्गदर्शन सुरक्षा और दौरे के बाद देखभाल पर केंद्रित है।",

    fire_critical_reason:
      "यह स्थिति गंभीर है क्योंकि आग और धुआं तुरंत जानलेवा हो सकते हैं। यह मार्गदर्शन निकासी और आपातकालीन सेवाओं को प्राथमिकता देता है।",

    other_unknown_reason:
      "यह स्थिति अज्ञात है क्योंकि आपातकाल को स्पष्ट रूप से पहचाना नहीं जा सका। यह मार्गदर्शन व्यक्तिगत सुरक्षा और आपातकालीन सेवाओं से संपर्क पर केंद्रित है।",
  },

  /* =========================================================
     ======================= TELUGU ===========================
     ========================================================= */
  te: {
    app_title: "ఏఐ అత్యవసర సహాయకుడు",
    app_description:
      "ఆతురత ఉన్న క్షణాల్లో స్పష్టమైన, వేగవంతమైన అత్యవసర నిర్ణయాలు పొందండి.",
    start_emergency: "అత్యవసరం ప్రారంభించండి",
    home_disclaimer:
      "వేగం, స్పష్టత మరియు బాధ్యతాయుతమైన AI నిర్ణయాల కోసం రూపొందించబడింది.",

    emergency_details: "అత్యవసర వివరాలు",
    emergency_hint:
      "పరిస్థితిని ఎంచుకోండి. AI తదుపరి చర్యను నిర్ణయిస్తుంది.",
    emergency_type: "అత్యవసర రకం",
    select_type: "రకాన్ని ఎంచుకోండి",
    symptoms: "లక్షణాలు",
    select_symptom: "లక్షణాన్ని ఎంచుకోండి",
    get_decision: "AI నిర్ణయం పొందండి",
    voice_input: "వాయిస్ ఇన్‌పుట్ ఉపయోగించండి",
    listening: "వింటోంది...",
    voice_help: "వేగంగా నివేదించేందుకు ఐచ్ఛిక వాయిస్ ఇన్‌పుట్",

    Accident: "ప్రమాదం",
    Medical: "వైద్య",
    Fire: "అగ్ని ప్రమాదం",
    Other: "ఇతర",

    Unconscious: "సృహ తప్పింది",
    "Heavy Bleeding": "తీవ్రమైన రక్తస్రావం",
    Fall: "పడిపోవడం",
    Fracture: "ఎముక విరగడం",
    "Minor Injury": "చిన్న గాయం",
    "Breathing Difficulty": "శ్వాసలో ఇబ్బంది",
    "Severe Pain": "తీవ్ర నొప్పి",
    "Chest Pain": "ఛాతీ నొప్పి",
    "Panic Attack": "ఆందోళన దాడి",
    Seizure: "ఫిట్స్",
    Burns: "కాలిన గాయాలు",
    "Smoke Inhalation": "పొగ పీల్చడం",

    decision_title: "ఏఐ అత్యవసర మార్గదర్శకం",
    analyzing: "పరిస్థితిని విశ్లేషిస్తున్నాము...",
    emergency_type_label: "అత్యవసర రకం",
    symptom_label: "లక్షణం",

    severity: "తీవ్రత",
    severity_CRITICAL: "తీవ్రమైనది",
    severity_HIGH: "ఎక్కువ",
    severity_LOW: "తక్కువ",
    severity_UNKNOWN: "తెలియదు",

    immediate_action: "తక్షణ చర్య అవసరం",
    urgent_attention: "తక్షణ శ్రద్ధ అవసరం",
    guided_assistance: "మార్గనిర్దేశిత సహాయం",

    guidance_note:
      "ఈ మార్గదర్శకం అధిక ఒత్తిడి పరిస్థితుల్లో గందరగోళాన్ని తగ్గిస్తుంది.",

    ai_confidence: "ఏఐ విశ్వాసం",
    high_confidence: "అధిక విశ్వాస నిర్ణయం",
    moderate_confidence: "మధ్యస్థ విశ్వాస నిర్ణయం",
    low_confidence: "తక్కువ విశ్వాసం — మానవ సహాయం అవసరం",
    low_confidence_warning:
      "తక్కువ విశ్వాసం. దయచేసి అత్యవసర సేవలను సంప్రదించండి.",

    logged: "అత్యవసర సంఘటన Firebaseలో సురక్షితంగా నమోదు చేయబడింది",
    missing_info: "అత్యవసర సమాచారం లేదు.",

    what_to_do: "ఇప్పుడు ఏమి చేయాలి",
    do_not: "ఇవి చేయవద్దు",
    why_decision: "ఈ నిర్ణయం ఎందుకు?",

    cta_call_108: "అత్యవసర సేవలకు కాల్ చేయండి (108)",
    cta_call_112: "అత్యవసర సేవలకు కాల్ చేయండి (112)",

    decision_disclaimer:
      "ఈ వ్యవస్థ మార్గదర్శకానికి మాత్రమే, వృత్తిపర సేవలకు ప్రత్యామ్నాయం కాదు.",

    /* ---------- GENERAL ACTIONS ---------- */
    general_call_emergency:
      "తక్షణమే అత్యవసర సేవలకు కాల్ చేయండి.",
    general_stay_safe:
      "ప్రశాంతంగా ఉండి భద్రతను నిర్ధారించండి.",
    general_unknown_reason:
      "సరిపడిన సమాచారం లేదు. అత్యవసర స్పందన అవసరం.",

    /* ---------- ACCIDENT ACTIONS ---------- */
    accident_unconscious_check_breathing:
      "వ్యక్తి శ్వాస తీసుకుంటున్నాడో లేదో తనిఖీ చేయండి.",
    accident_unconscious_recovery_position:
      "వ్యక్తిని రికవరీ స్థితిలో ఉంచండి.",
    accident_unconscious_loosen_clothes:
      "బిగువైన బట్టలు వదులుగా చేయండి.",
    accident_unconscious_no_food:
      "ఆహారం లేదా నీరు ఇవ్వవద్దు.",
    accident_unconscious_no_shake:
      "వ్యక్తిని కుదిపేయవద్దు.",

    bleeding_apply_pressure:
      "రక్తస్రావాన్ని ఆపేందుకు బలంగా ఒత్తండి.",
    bleeding_use_clean_cloth:
      "శుభ్రమైన గుడ్డ లేదా బ్యాండేజ్ ఉపయోగించండి.",
    bleeding_elevate_area:
      "గాయమైన భాగాన్ని పైకి ఉంచండి.",
    bleeding_no_remove_objects:
      "లోపల ఇరుక్కున్న వస్తువులను తీసివేయవద్దు.",

    fall_keep_still:
      "వ్యక్తిని కదలకుండా ఉంచండి.",
    fall_check_injuries:
      "కనిపించే గాయాల కోసం పరిశీలించండి.",
    fall_no_move_unnecessarily:
      "అవసరం లేకుండా వ్యక్తిని కదిలించవద్దు.",
    fall_no_massage:
      "గాయమైన భాగాలను మసాజ్ చేయవద్దు.",

    fracture_immobilize:
      "గాయమైన భాగాన్ని స్థిరంగా ఉంచండి.",
    fracture_apply_cold:
      "వాపు తగ్గించేందుకు చల్లటి కట్టు వేయండి.",
    fracture_no_realign:
      "ఎముకను సరిచేయడానికి ప్రయత్నించవద్దు.",

    minor_clean_wound:
      "గాయాన్ని శుభ్రమైన నీటితో శుభ్రం చేయండి.",
    minor_apply_bandage:
      "శుభ్రమైన బ్యాండేజ్ వేయండి.",
    minor_monitor:
      "వాపు లేదా నొప్పిని గమనించండి.",

    /* ---------- MEDICAL ACTIONS ---------- */
    breathing_sit_upright:
      "వ్యక్తిని నిటారుగా కూర్చోబెట్టండి.",
    breathing_loosen_clothes:
      "బిగువైన బట్టలు వదులుగా చేయండి.",
    breathing_slow_breath:
      "నెమ్మదిగా శ్వాస తీసుకోవాలని ప్రోత్సహించండి.",
    breathing_no_flat:
      "వ్యక్తిని పూర్తిగా పడుకోబెట్టవద్దు.",

    pain_rest:
      "వ్యక్తికి విశ్రాంతి ఇవ్వండి.",
    pain_monitor:
      "లక్షణాలను జాగ్రత్తగా గమనించండి.",
    call_if_worse:
      "నొప్పి పెరిగితే అత్యవసర సేవలకు కాల్ చేయండి.",
    pain_no_unknown_meds:
      "తెలియని మందులు ఇవ్వవద్దు.",

    chest_help_sit:
      "వ్యక్తిని సౌకర్యంగా కూర్చోబెట్టండి లేదా పడుకోబెట్టండి.",
    chest_loosen_clothes:
      "బిగువైన బట్టలు వదులుగా చేయండి.",
    chest_keep_calm:
      "వ్యక్తిని ప్రశాంతంగా ఉంచండి.",
    chest_no_walk:
      "వ్యక్తిని నడవనివ్వవద్దు.",
    chest_no_food:
      "ఆహారం లేదా నీరు ఇవ్వవద్దు.",

    panic_slow_breathing:
      "నెమ్మదిగా, లోతుగా శ్వాస తీసుకోవాలని చెప్పండి.",
    panic_quiet_place:
      "నిశ్శబ్దమైన మరియు సురక్షితమైన చోటికి తీసుకెళ్లండి.",
    panic_reassure:
      "వ్యక్తితో ఉండి ధైర్యం చెప్పండి.",
    panic_no_shout:
      "కేకలు వేయవద్దు లేదా ఆందోళన చెందవద్దు.",
    panic_no_crowd:
      "వ్యక్తి చుట్టూ గుంపు చేయవద్దు.",

    seizure_clear_area:
      "గాయాలు కాకుండా చుట్టూ ఉన్న వస్తువులు తొలగించండి.",
    seizure_recovery_position:
      "దాడి తర్వాత వ్యక్తిని పక్కకు తిప్పండి.",
    seizure_time:
      "సాధ్యమైతే దాడి వ్యవధిని గమనించండి.",
    seizure_no_restrain:
      "దాడి సమయంలో కదలికలను ఆపవద్దు.",
    seizure_no_mouth:
      "నోటిలో ఏదీ పెట్టవద్దు.",
  
    /* ---------- FIRE ACTIONS ---------- */
    fire_move_away:
      "వెంటనే మంటల నుండి దూరంగా వెళ్లండి.",
    fire_avoid_smoke:
      "పొగను పీల్చకుండా ఉండండి.",
    fire_no_elevator:
      "లిఫ్ట్ ఉపయోగించవద్దు.",

    /* ---------- OTHER ---------- */
    other_assess:
      "పరిస్థితిని జాగ్రత్తగా అంచనా వేయండి.",
    other_ensure_safety:
      "మీ భద్రతను నిర్ధారించుకోండి.",
    
    accident_unconscious_reason:
      "ఈ పరిస్థితి తీవ్రమైనది ఎందుకంటే ప్రమాదం తర్వాత స్పృహ కోల్పోవడం తల లేదా అంతర్గత గాయానికి సూచన కావచ్చు. ఈ మార్గదర్శకం శ్వాస మార్గ భద్రత మరియు తక్షణ అత్యవసర సహాయాన్ని ప్రాధాన్యం ఇస్తుంది.",

    bleeding_high_reason:
      "ఈ పరిస్థితి అధిక తీవ్రత కలిగినది ఎందుకంటే తీవ్రమైన రక్తస్రావం షాక్‌కు దారితీయవచ్చు. ఈ మార్గదర్శకం రక్తస్రావ నియంత్రణపై దృష్టి సారిస్తుంది.",

    fall_high_reason:
      "ఈ పరిస్థితి అధిక తీవ్రత కలిగినది ఎందుకంటే పడిపోవడం వల్ల కనిపించని అంతర్గత గాయాలు ఉండవచ్చు. ఈ మార్గదర్శకం కదలికలను తగ్గించడంపై దృష్టి సారిస్తుంది.",

    fracture_high_reason:
      "ఈ పరిస్థితి అధిక తీవ్రత కలిగినది ఎందుకంటే ఎముక విరగడం సరైన స్థిరీకరణ లేకుండా మరింత క్షీణించవచ్చు. ఈ మార్గదర్శకం స్థిరీకరణపై దృష్టి సారిస్తుంది.",

    minor_low_reason:
      "ఈ పరిస్థితి తక్కువ తీవ్రత కలిగినది ఎందుకంటే తక్షణ ప్రాణాపాయం లేదు. ఈ మార్గదర్శకం సాధారణ సంరక్షణపై దృష్టి సారిస్తుంది.",

    breathing_high_reason:
      "ఈ పరిస్థితి అధిక తీవ్రత కలిగినది ఎందుకంటే శ్వాస తీసుకోవడంలో ఇబ్బంది శ్వాసకోశ సమస్యకు సూచన కావచ్చు. ఈ మార్గదర్శకం శ్వాస మద్దతును ప్రాధాన్యం ఇస్తుంది.",

    pain_high_reason:
      "ఈ పరిస్థితి అధిక తీవ్రత కలిగినది ఎందుకంటే తీవ్రమైన నొప్పి ఒక తీవ్రమైన సమస్యకు సంకేతం కావచ్చు. ఈ మార్గదర్శకం పర్యవేక్షణపై దృష్టి సారిస్తుంది.",

    chest_critical_reason:
      "ఈ పరిస్థితి తీవ్రమైనది ఎందుకంటే ఛాతీ నొప్పి గుండె సంబంధిత అత్యవసర పరిస్థితికి సూచన కావచ్చు. ఈ మార్గదర్శకం తక్షణ వైద్య సహాయాన్ని ప్రాధాన్యం ఇస్తుంది.",

    panic_low_reason:
      "ఈ పరిస్థితి తక్కువ తీవ్రత కలిగినది ఎందుకంటే పానిక్ దాడులు సాధారణంగా ప్రాణాపాయం కావు. ఈ మార్గదర్శకం వ్యక్తిని శాంతింపజేయడంపై దృష్టి సారిస్తుంది.",

    seizure_high_reason:
      "ఈ పరిస్థితి అధిక తీవ్రత కలిగినది ఎందుకంటే ఫిట్స్ వల్ల గాయాలు లేదా దీర్ఘకాలిక అపస్మార స్థితి కలగవచ్చు. ఈ మార్గదర్శకం భద్రతపై దృష్టి సారిస్తుంది.",

    fire_critical_reason:
      "ఈ పరిస్థితి తీవ్రమైనది ఎందుకంటే మంటలు మరియు పొగ తక్షణ ప్రాణాపాయాన్ని కలిగిస్తాయి. ఈ మార్గదర్శకం తక్షణ పారిపోవడాన్ని ప్రాధాన్యం ఇస్తుంది.",

    other_unknown_reason:
      "ఈ పరిస్థితి అజ్ఞాతంగా ఉంది ఎందుకంటే అత్యవసర పరిస్థితిని స్పష్టంగా గుర్తించలేకపోయాము. ఈ మార్గదర్శకం వ్యక్తిగత భద్రతను ప్రాధాన్యం ఇస్తుంది.",
  },
};
