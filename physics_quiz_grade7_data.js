// physics_quiz_grade7_data.js

// Explicitly attach quizQuestions to the window object to ensure global accessibility
window.quizQuestions = [
    // Grade 7 - Chapter 1: Heat
    // Lesson 2: Thermal Expansion (Formula-focused)
    {
        "question": "ដែកមួយដុំមានប្រវែង 10m នៅ 20°C ។ ប្រសិនបើមេគុណរីកមាឌលីនែអ៊ែររបស់ដែកគឺ $1.2 \\times 10^{-5} \\text{ /°C}$ តើប្រវែងរបស់វាប៉ុន្sនៅ 120°C?",
        "hint": "Remember to calculate the change in length using the original length, the coefficient of linear expansion, and the change in temperature: $\\Delta L = L_0 \\alpha \\Delta T$.",
        "answerOptions": [
            {"text": "10.012 m", "rationale": "This is the correct final length, calculated by adding the change in length ($10 \\text{ m} \\times 1.2 \\times 10^{-5} \\text{ /°C} \\times (120-20)°C = 0.012 \\text{ m}$) to the original length.", "isCorrect": true},
            {"text": "10.12 m", "rationale": "This answer might result from an incorrect calculation of the change in length, or a misplaced decimal.", "isCorrect": false},
            {"text": "10.0012 m", "rationale": "This value is too small, indicating a possible error in the magnitude of the change in length.", "isCorrect": false},
            {"text": "10.024 m", "rationale": "This answer might be obtained if the temperature difference was incorrectly calculated or applied.", "isCorrect": false}
        ]
    },
    // Lesson 3: Quantity of Heat (Formula-focused)
    {
        "question": "ទឹក 2kg ត្រូវបានកម្ដៅពី 20°C ទៅ 80°C ។ តើបរិមាណកម្ដៅដែលត្រូវការប៉ុន្s? (កម្ដៅជាក់លាក់របស់ទឹកគឺ $4200 \\text{ J/kg.°C}$)",
        "hint": "The formula for heat energy involves mass, specific heat capacity, and the change in temperature: $Q = mc\\Delta T$.",
        "answerOptions": [
            {"text": "504,000 J", "rationale": "This result is obtained by correctly applying the formula $Q = mc\\Delta T$, where $\\Delta T = 80°C - 20°C = 60°C$, so $Q = 2 \\text{ kg} \\times 4200 \\text{ J/kg.°C} \\times 60°C = 504,000 \\text{ J}$.", "isCorrect": true},
            {"text": "168,000 J", "rationale": "This calculation might have used only the initial temperature instead of the change in temperature.", "isCorrect": false},
            {"text": "672,000 J", "rationale": "This answer may result from using the final temperature instead of the temperature difference in the calculation.", "isCorrect": false},
            {"text": "84,000 J", "rationale": "This value might be calculated if the mass was not correctly included in the heat formula.", "isCorrect": false}
        ]
    },
    {
        "question": "ទឹកកក 0.5kg នៅ 0°C រលាយទាំងស្រុង។ តើបរិមាណកម្ដៅដែលត្រូវការប៉ុន្s? (កម្ដៅលាក់នៃការរលាយរបស់ទឹកកកគឺ $3.34 \\times 10^5 \\text{ J/kg}$)",
        "hint": "When a substance changes phase, the heat absorbed or released is related to its mass and latent heat: $Q = mL$.",
        "answerOptions": [
            {"text": "167,000 J", "rationale": "This is the correct amount of heat, calculated by multiplying the mass by the latent heat of fusion: $Q = 0.5 \\text{ kg} \\times 3.34 \\times 10^5 \\text{ J/kg} = 167,000 \\text{ J}$.", "isCorrect": true},
            {"text": "334,000 J", "rationale": "This answer is the latent heat value itself, not multiplied by the mass.", "isCorrect": false},
            {"text": "668,000 J", "rationale": "This result might occur if the mass was incorrectly doubled.", "isCorrect": false},
            {"text": "16,700 J", "rationale": "This answer is too small, possibly due to a decimal error.", "isCorrect": false}
        ]
    },
    // Grade 7 - Chapter 3: Electricity
    // Lesson 2: Electric Current (Formula-focused)
    {
        "question": "ប្រសិនបើបន្ទុក 5C ឆ្លងកាត់ចំណុចមួយក្នុងសៀគ្វីក្នុងរយៈពេល 2s តើចរន្តអគ្គិសនីប៉ុន្s?",
        "hint": "Electric current is defined as the rate of flow of electric charge: $I = Q/t$.",
        "answerOptions": [
            {"text": "2.5 A", "rationale": "This is the correct current, calculated by dividing the charge by the time: $I = 5 \\text{ C} / 2 \\text{ s} = 2.5 \\text{ A}$.", "isCorrect": true},
            {"text": "10 A", "rationale": "This result comes from multiplying the charge and time, instead of dividing.", "isCorrect": false},
            {"text": "0.4 A", "rationale": "This answer is the inverse of the correct calculation.", "isCorrect": false},
            {"text": "5 A", "rationale": "This answer might be obtained if the time was not included in the calculation.", "isCorrect": false}
        ]
    },
    // Grade 7 - Chapter 4: Pressure
    // Lesson 1: Pressure of Solid Objects (Formula-focused)
    {
        "question": "ប្រសិនបើកម្លាំង 100N ត្រូវបានអនុវត្តលើផ្ទៃ 0.5m$^2$ ។ តើសម្ពាធប៉ុន្s?",
        "hint": "Pressure is defined as force per unit area: $P = F/A$.",
        "answerOptions": [
            {"text": "200 Pa", "rationale": "This is the correct pressure, calculated by dividing the force by the area: $P = 100 \\text{ N} / 0.5 \\text{ m}^2 = 200 \\text{ Pa}$.", "isCorrect": true},
            {"text": "50 Pa", "rationale": "This result is obtained by multiplying the force and area, which is incorrect.", "isCorrect": false},
            {"text": "100 Pa", "rationale": "This answer might be obtained if the area was incorrectly assumed to be 1m$^2$.", "isCorrect": false},
            {"text": "0.005 Pa", "rationale": "This answer is the inverse of the correct calculation.", "isCorrect": false}
        ]
    },
    // Grade 7 - Conceptual Questions (from various chapters)
    {
        "question": "តើសីតុណ្ហភាពជាអ្វី?",
        "hint": "Think about what temperature fundamentally measures in terms of hotness or coldness.",
        "answerOptions": [
            {"text": "កម្រិតក្តៅ ឬត្រជាក់នៃអង្គធាតុ", "rationale": "សីតុណ្ហភាពគឺជាទំហំមួយដែលកំណត់ដោយកម្រិតក្តៅឬត្រជាក់នៃអង្គធាតុមួយ។", "isCorrect": true},
            {"text": "បរិមាណកម្ដៅក្នុងអង្គធាតុ", "rationale": "បរិមាណកម្ដៅគឺជាទម្រង់ថាមពលមួយ ខុសពីសីតុណ្ហភាពដែលជាការវាស់កម្រិតថាមពលកាណេទិចមធ្យមនៃម៉ូលេគុល។", "isCorrect": false},
            {"text": "ថាមពលដែលផ្លាស់ប្តូរ", "rationale": "ថាមពលដែលផ្លាស់ប្តូរអាចជាកម្ដៅ ប៉ុន្តែវាមិនមែនជានិយមន័យនៃសីតុណ្ហភាពទេ។", "isCorrect": false},
            {"text": "ល្បឿននៃម៉ូលេគុល", "rationale": "ល្បឿននៃម៉ូលេគុលគឺទាក់ទងនឹងថាមពលកាណេទិច ដែលជះឥទ្ធិពលដល់សីតុណ្ហភាព ប៉ុន្តែវាមិនមែនជាសីតុណ្ហភាពផ្ទាល់នោះទេ។", "isCorrect": false}
        ]
    },
    {
        "question": "តើអ្វីទៅជាការចម្លងកម្ដៅ (Conduction)?",
        "hint": "Think about heat transfer through direct contact.",
        "answerOptions": [
            {"text": "ការបញ្ជូនកម្ដៅតាមរយៈចលនានៃអង្គធាតុរាវ ឬឧស្ម័ន។", "rationale": "This option is incorrect; this describes convection.", "isCorrect": false},
            {"text": "ការបញ្ជូនកម្ដៅតាមរយៈរលកអេឡិចត្រូម៉ាញេទិច។", "rationale": "This option is incorrect; this describes radiation.", "isCorrect": false},
            {"text": "ការបញ្ជូនកម្ដៅតាមរយៈការប៉ះទង្គិចផ្ទាល់នៃភាគល្អិត។", "rationale": "ការចម្លងកម្ដៅគឺជាការបញ្ជូនកម្ដៅតាមរយៈការប៉ះទង្គិចផ្ទាល់នៃភាគល្អិតនៅក្នុងអង្គធាតុមួយ។", "isCorrect": true},
            {"text": "ការបាត់បង់កម្ដៅពីអង្គធាតុ។", "rationale": "This option is incorrect; heat loss is a general term, not a specific mechanism of heat transfer.", "isCorrect": false}
        ]
    },
    {
        "question": "តើអ្វីទៅជាចរន្តអគ្គិសនី (Electric current)?",
        "hint": "It's about the flow of charge.",
        "answerOptions": [
            {"text": "បរិមាណថាមពលនៅក្នុងសៀគ្វី។", "rationale": "This option is incorrect; energy is related but not the definition of electric current.", "isCorrect": false},
            {"text": "ល្បឿននៃពន្លឺ។", "rationale": "This option is incorrect; the speed of light is unrelated to electric current.", "isCorrect": false},
            {"text": "លំហូរនៃបន្ទុកអគ្គិសនី។", "rationale": "ចរន្តអគ្គិសនីគឺជាលំហូរនៃបន្ទុកអគ្គិសនីក្នុងមួយឯកតាពេលវេលា។", "isCorrect": true},
            {"text": "កម្លាំងទាញវត្ថុ។", "rationale": "This option is incorrect; this describes force, not electric current.", "isCorrect": false}
        ]
    },
    {
        "question": "តើអ្វីទៅជាតង់ស្យុងអគ្គិសនី (Electric voltage) ឬផលសក្តានុពលអគ្គិសនី (Electric potential difference)?",
        "hint": "It's the work done per unit charge.",
        "answerOptions": [
            {"text": "បរិមាណចរន្តនៅក្នុងសៀគ្វី។", "rationale": "This option is incorrect; current is the flow of charge, not voltage.", "isCorrect": false},
            {"text": "កម្លាំងដែលទាញអេឡិចត្រុង។", "rationale": "This option is incorrect; force is related, but voltage is potential difference.", "isCorrect": false},
            {"text": "ថាមពលក្នុងមួយឯកតាបន្ទុកដែលត្រូវការដើម្បីផ្លាស់ទីបន្ទុកពីរចំណុចមួយទៅចំណុចមួយទៀត។", "rationale": "តង់ស្យុងអគ្គិសនីគឺជាថាមពលក្នុងមួយឯកតាបន្ទុកដែលត្រូវការដើម្បីផ្លាស់ទីបន្ទុកពីរចំណុចមួយទៅចំណុចមួយទៀត។", "isCorrect": true},
            {"text": "ភាពធន់នៃសម្ភារៈ។", "rationale": "This option is incorrect; resistance opposes current flow, but is not the definition of voltage.", "isCorrect": false}
        ]
    },
    {
        "question": "តើអ្វីទៅជាសម្ពាធ (Pressure)?",
        "hint": "It's related to force distributed over an area.",
        "answerOptions": [
            {"text": "កម្លាំងសរុបដែលបានអនុវត្ត។", "rationale": "This option is incorrect; pressure is force per unit area, not just total force.", "isCorrect": false},
            {"text": "កម្លាំងក្នុងមួយឯកតាផ្ទៃ។", "rationale": "សម្ពាធគឺជាកម្លាំងក្នុងមួយឯកតាផ្ទៃដែលបានអនុវត្តកែងទៅនឹងផ្ទៃនោះ។", "isCorrect": true},
            {"text": "បរិមាណកម្ដៅក្នុងអង្គធាតុ។", "rationale": "This option is incorrect; this describes heat, not pressure.", "isCorrect": false},
            {"text": "ល្បឿននៃអង្គធាតុ។", "rationale": "This option is incorrect; this describes speed, not pressure.", "isCorrect": false}
        ]
    }
];
