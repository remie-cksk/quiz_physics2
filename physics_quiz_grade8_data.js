// physics_quiz_grade8_data.js

// Make quizQuestions a global variable by removing 'const' or attaching to window
// Explicitly attach quizQuestions to the window object to ensure global accessibility
window.quizQuestions = [
    // Grade 7 - Chapter 1: Heat
    // Lesson 2: Thermal Expansion (Formula-focused)
    {
        "question": "រថយន្តមួយបង្កើនល្បឿនពី 0 m/s ទៅ 20 m/s ក្នុងរយៈពេល 5s ។ តើសំទុះរបស់វាប៉ុន្មាន?",
        "hint": "Acceleration is the rate of change of velocity over time: $a = \\Delta v / t$.",
        "answerOptions": [
            {"text": "4 m/s$^2$", "rationale": "This is the correct acceleration, calculated as the change in velocity divided by the time taken: $a = (20 - 0) \\text{ m/s} / 5 \\text{ s} = 4 \\text{ m/s}^2$.", "isCorrect": true},
            {"text": "100 m/s$^2$", "rationale": "This result comes from multiplying the final velocity by the time.", "isCorrect": false},
            {"text": "0.25 m/s$^2$", "rationale": "This answer is the inverse of the correct calculation.", "isCorrect": false},
            {"text": "25 m/s$^2$", "rationale": "This answer might be the sum of the final velocity and time.", "isCorrect": false}
        ]
    },
    {
        "question": "ថ្មមួយត្រូវបានទម្លាក់ពីលើអគារខ្ពស់មួយ។ ប្រសិនបើវាធ្លាក់ដល់ដីក្នុងរយៈពេល 3s តើកម្ពស់អគារប៉ុន្មាន? ($g=10 \\text{ m/s}^2$)",
        "hint": "Use the free-fall equation $d = v_0t + \\frac{1}{2}gt^2$, where $v_0 = 0$ for dropping.",
        "answerOptions": [
            {"text": "45 m", "rationale": "This is the correct height, calculated as $d = \\frac{1}{2} \\times 10 \\text{ m/s}^2 \\times (3 \\text{ s})^2 = 5 \\times 9 = 45 \\text{ m}$.", "isCorrect": true},
            {"text": "30 m", "rationale": "This result might be obtained by multiplying g by t, but not by 1/2 or t squared.", "isCorrect": false},
            {"text": "90 m", "rationale": "This answer might result from forgetting to multiply by 1/2 in the formula.", "isCorrect": false},
            {"text": "15 m", "rationale": "This answer is too small, possibly from dividing by g instead of multiplying.", "isCorrect": false}
        ]
    },
    {
        "question": "វត្ថុមួយត្រូវបានបោះឡើងលើដោយល្បឿនដំបូង 10 m/s ។ តើវាអាចឡើងដល់កម្ពស់អតិបរមាប៉ុន្មាន? (មិនគិតពីកម្លាំងកកិតខ្យល់, $g=9.8 \\text{ m/s}^2$)",
        "hint": "At the maximum height, the final velocity is zero. Use the kinematic equation $v^2 = v_0^2 + 2ad$.",
        "answerOptions": [
            {"text": "5.1 m", "rationale": "This is the correct maximum height, calculated using $v^2 = v_0^2 + 2gd$, where $v=0$, $v_0=10$, and $g=-9.8$. So $0 = 10^2 + 2(-9.8)d \\implies d = 100 / 19.6 \\approx 5.1 \\text{ m}$.", "isCorrect": true},
            {"text": "10.2 m", "rationale": "This answer might be obtained if the factor of 2 in the kinematic equation was missed.", "isCorrect": false},
            {"text": "1.02 m", "rationale": "This answer is too small, possibly due to a decimal error.", "isCorrect": false},
            {"text": "20.4 m", "rationale": "This answer might result from an incorrect application of the formula or a calculation error.", "isCorrect": false}
        ]
    },
    // Grade 8 - Chapter 2: Force and Motion
    // Lesson 1: Force (Formula-focused)
    {
        "question": "កម្លាំង 50N ត្រូវបានអនុវត្តលើវត្ថុមួយដែលមានម៉ាស់ 5kg ។ តើសំទុះរបស់វត្ថុប៉ុន្មាន?",
        "hint": "Apply Newton's Second Law: $F=ma$.",
        "answerOptions": [
            {"text": "10 m/s$^2$", "rationale": "This is the correct acceleration, calculated as $a = F/m = 50 \\text{ N} / 5 \\text{ kg} = 10 \\text{ m/s}^2$.", "isCorrect": true},
            {"text": "250 m/s$^2$", "rationale": "This result comes from multiplying force and mass, which is incorrect.", "isCorrect": false},
            {"text": "0.1 m/s$^2$", "rationale": "This answer is the inverse of the correct calculation.", "isCorrect": false},
            {"text": "45 m/s$^2$", "rationale": "This answer incorrectly subtracts the mass from the force.", "isCorrect": false}
        ]
    },
    {
        "question": "ប្រអប់មួយមានទម្ងន់ 200N ត្រូវបានរុញលើផ្ទៃផ្ដេក។ ប្រសិនបើមេគុណកកិតកាណេទិចគឺ 0.2 តើកម្លាំងកកិតប៉ុន្មាន?",
        "hint": "Friction force is $\\mu_k N$, where $N$ is the normal force (equal to weight on a horizontal surface).",
        "answerOptions": [
            {"text": "40 N", "rationale": "This is the correct kinetic friction force, calculated as $F_k = 0.2 \\times 200 \\text{ N} = 40 \\text{ N}$.", "isCorrect": true},
            {"text": "1000 N", "rationale": "This result might be obtained by dividing the weight by the coefficient of friction.", "isCorrect": false},
            {"text": "200.2 N", "rationale": "This answer incorrectly adds the coefficient to the weight.", "isCorrect": false},
            {"text": "20 N", "rationale": "This answer might result from a decimal error in the multiplication.", "isCorrect": false}
        ]
    },
    // Grade 8 - Conceptual Questions (from various chapters)
    {
        "question": "តើអ្វីទៅហៅថា ចលនាមេកានិច?",
        "hint": "Think about the definition of motion in physics.",
        "answerOptions": [
            {"text": "ការផ្លាស់ប្តូរទីតាំងនៃអង្គធាតុធៀបនឹងអង្គធាតុដទៃទៀត។", "rationale": "ចលនាមេកានិចគឺជាការផ្លាស់ប្តូរទីតាំងនៃអង្គធាតុធៀបនឹងអង្គធាតុដទៃទៀត។", "isCorrect": true},
            {"text": "ល្បឿននៃពន្លឺ។", "rationale": "This option is incorrect; the speed of light is a constant, not the definition of mechanical motion.", "isCorrect": false},
            {"text": "បរិមាណកម្លាំងដែលបានអនុវត្ត។", "rationale": "This option is incorrect; force causes motion, but is not motion itself.", "isCorrect": false},
            {"text": "ថាមពលដែលបានប្រើប្រាស់។", "rationale": "This option is incorrect; energy is related to motion, but not its definition.", "isCorrect": false}
        ]
    },
    {
        "question": "តើអ្វីទៅជាសំទុះ (Acceleration)?",
        "hint": "It's the rate of change of velocity.",
        "answerOptions": [
            {"text": "ល្បឿននៃអង្គធាតុ។", "rationale": "This option is incorrect; speed is a measure of how fast an object is moving, not its change in velocity.", "isCorrect": false},
            {"text": "អត្រានៃការផ្លាស់ប្តូរទីតាំង។", "rationale": "This option is incorrect; this describes velocity.", "isCorrect": false},
            {"text": "អត្រានៃការផ្លាស់ប្តូរល្បឿនវ៉ិចទ័រ។", "rationale": "សំទុះគឺជាអត្រានៃការផ្លាស់ប្តូរល្បឿនវ៉ិចទ័រ។", "isCorrect": true},
            {"text": "ចម្ងាយដែលបានធ្វើដំណើរ។", "rationale": "This option is incorrect; distance is a measure of length, not acceleration.", "isCorrect": false}
        ]
    },
    {
        "question": "តើអ្វីជាច្បាប់ទីមួយរបស់ញូតុន (Newton's First Law)?",
        "hint": "It's also known as the law of inertia.",
        "answerOptions": [
            {"text": "កម្លាំងស្មើនឹងម៉ាស់គុណនឹងសំទុះ។", "rationale": "This option is incorrect; this is Newton's Second Law.", "isCorrect": false},
            {"text": "អង្គធាតុនៅនឹងកន្លែងនឹងនៅតែនឹងកន្លែង ហើយអង្គធាតុក្នុងចលនានឹងបន្តចលនាត្រង់ស្មើ លុះត្រាតែកម្លាំងសុទ្ធមិនស្មើសូន្យបានអនុវត្តលើវា។", "rationale": "យោងតាមច្បាប់ទីមួយរបស់ញូតុន ប្រសិនបើកម្លាំងសុទ្ធលើវត្ថុមួយស្មើសូន្យ វត្ថុនោះនឹងស្ថិតនៅនឹងកន្លែង ឬបន្តចលនាត្រង់ស្មើ។", "isCorrect": true},
            {"text": "សម្រាប់រាល់សកម្មភាព តែងតែមានប្រតិកម្មស្មើគ្នា និងផ្ទុយគ្នា។", "rationale": "This option is incorrect; this is Newton's Third Law.", "isCorrect": false},
            {"text": "ថាមពលមិនអាចបង្កើត ឬបំផ្លាញបានទេ។", "rationale": "This option is incorrect; this is the Law of Conservation of Energy.", "isCorrect": false}
        ]
    },
    {
        "question": "តើអ្វីទៅជាកម្មន្ត (Work)?",
        "hint": "It's about force causing displacement.",
        "answerOptions": [
            {"text": "ថាមពលសរុបនៃអង្គធាតុ។", "rationale": "This option is incorrect; energy is related to work, but work is the transfer of energy.", "isCorrect": false},
            {"text": "កម្លាំងគុណនឹងចម្ងាយដែលបានផ្លាស់ទីក្នុងទិសដៅកម្លាំង។", "rationale": "កម្មន្តគឺជាកម្លាំងគុណនឹងចម្ងាយដែលបានផ្លាស់ទីក្នុងទិសដៅកម្លាំង។", "isCorrect": true},
            {"text": "ល្បឿននៃអង្គធាតុ។", "rationale": "This option is incorrect; speed is a measure of motion, not work.", "isCorrect": false},
            {"text": "អានុភាពដែលបានប្រើប្រាស់។", "rationale": "This option is incorrect; power is the rate of doing work, not work itself.", "isCorrect": false}
        ]
    },
    {
        "question": "តើអ្វីជាថាមពលកាណេទិច (Kinetic Energy)?",
        "hint": "It's the energy of motion.",
        "answerOptions": [
            {"text": "ថាមពលដែលរក្សាទុកដោយសារទីតាំង។", "rationale": "This option is incorrect; this describes potential energy.", "isCorrect": false},
            {"text": "ថាមពពលដែលទាក់ទងនឹងចលនារបស់អង្គធាតុ។", "rationale": "ថាមពលកាណេទិចគឺជាថាមពលដែលទាក់ទងនឹងចលនារបស់អង្គធាតុ។", "isCorrect": true},
            {"text": "ថាមពលដែលបានបញ្ចេញជាពន្លឺ។", "rationale": "This option is incorrect; this describes a form of energy release, not kinetic energy.", "isCorrect": false},
            {"text": "ថាមពលដែលប្រើប្រាស់ដើម្បីបង្កើនសីតុណ្ហភាព។", "rationale": "This option is incorrect; this describes thermal energy, not kinetic energy.", "isCorrect": false}
        ]
    }
];
