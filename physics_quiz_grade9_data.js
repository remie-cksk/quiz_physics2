// physics_quiz_grade9_data.js

// Make quizQuestions a global variable by removing 'const' or attaching to window
// Explicitly attach quizQuestions to the window object to ensure global accessibility
window.quizQuestions = [
    // Grade 7 - Chapter 1: Heat
    // Lesson 2: Thermal Expansion (Formula-focused)
    {
        "question": "កម្លាំងពីរ $\\vec{F}_1$ និង $\\vec{F}_2$ កែងគ្នា មានអាំងតង់ស៊ីតេរៀងគ្នា 3N និង 4N ។ តើអាំងតង់ស៊ីតេកម្លាំងជួបរបស់វាប៉ុន្មាន N?",
        "hint": "When two vectors are perpendicular, their resultant can be found using the Pythagorean theorem: $R = \\sqrt{F_1^2 + F_2^2}$.",
        "answerOptions": [
            {"text": "5 N", "rationale": "This is the correct magnitude of the resultant force, calculated as the hypotenuse of a right triangle with sides 3N and 4N: $R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ N}$.", "isCorrect": true},
            {"text": "7 N", "rationale": "This is the sum of the magnitudes of the two forces, which is incorrect for perpendicular vectors.", "isCorrect": false},
            {"text": "1 N", "rationale": "This is the difference between the magnitudes of the two forces, which is not how perpendicular vectors are combined.", "isCorrect": false},
            {"text": "12 N", "rationale": "This is the product of the magnitudes of the two forces.", "isCorrect": false}
        ]
    },
    {
        "question": "កម្លាំង 10N ត្រូវបានបំបែកជាពីរអង្គធាតុផ្សំកែងគ្នា។ ប្រសិនបើអង្គធាតុផ្សំមួយមាន 6N តើអង្គធាតុផ្សំទីពីរមានប៉ុន្មាន?",
        "hint": "This is the reverse of finding the resultant of perpendicular forces.",
        "answerOptions": [
            {"text": "8 N", "rationale": "This is the correct magnitude of the second component, calculated using the Pythagorean theorem: $F_2 = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8 \\text{ N}$.", "isCorrect": true},
            {"text": "4 N", "rationale": "This result is obtained by subtracting the given component from the total force.", "isCorrect": false},
            {"text": "16 N", "rationale": "This result is obtained by adding the given component to the total force.", "isCorrect": false},
            {"text": "7 N", "rationale": "This answer might result from an incorrect calculation or approximation.", "isCorrect": false}
        ]
    },
    {
        "question": "កម្លាំង 20N ត្រូវបានអនុវត្តនៅមុំ 30° ទៅនឹងផ្ទៃផ្ដេក។ តើអង្គធាតុផ្សំផ្ដេក និងបញ្ឈរនៃកម្លាំងប៉ុន្មាន?",
        "hint": "Use trigonometry: horizontal component is $F \\cos\\theta$, vertical component is $F \\sin\\theta$.",
        "answerOptions": [
            {"text": "ផ្ដេក: 17.32 N, បញ្ឈរ: 10 N", "rationale": "This is the correct breakdown. Horizontal component $F_x = 20 \\cos(30°) = 20 \\times 0.866 = 17.32 \\text{ N}$. Vertical component $F_y = 20 \\sin(30°) = 20 \\times 0.5 = 10 \\text{ N}$.", "isCorrect": true},
            {"text": "ផ្ដេក: 10 N, បញ្ឈរ: 17.32 N", "rationale": "This option incorrectly swaps the horizontal and vertical components.", "isCorrect": false},
            {"text": "ផ្ដេក: 20 N, បញ្ឈរ: 20 N", "rationale": "This option implies both components are equal to the total force, which is incorrect.", "isCorrect": false},
            {"text": "ផ្ដេក: 14.14 N, បញ្ឈរ: 14.14 N", "rationale": "This option would be correct if the angle was 45 degrees.", "isCorrect": false}
        ]
    },
    {
        "question": "ដងថ្លឹងមួយមានកម្លាំង 50N នៅចម្ងាយ 3m ពីចំណុចទ្រ។ តើកម្លាំងប៉ុន្មានដែលត្រូវការនៅចម្ងាយ 2m ពីចំណុចទ្រដើម្បីរក្សាលំនឹង?",
        "hint": "Apply the principle of moments: $F_1 d_1 = F_2 d_2$.",
        "answerOptions": [
            {"text": "75 N", "rationale": "This is the correct force, calculated as $F_2 = (50 \\text{ N} \\times 3 \\text{ m}) / 2 \\text{ m} = 150 / 2 = 75 \\text{ N}$.", "isCorrect": true},
            {"text": "33.3 N", "rationale": "This result might be obtained by incorrectly setting up the moment equation.", "isCorrect": false},
            {"text": "100 N", "rationale": "This answer could result from an incorrect rearrangement of the moment formula.", "isCorrect": false},
            {"text": "150 N", "rationale": "This value is the product of the initial force and distance, not the balancing force.", "isCorrect": false}
        ]
    },
    {
        "question": "ប្លង់ទេរមួយមានប្រវែង 5m និងកម្ពស់ 1m ។ តើគុណប្រយោជន៍មេកានិចរបស់វាប៉ុន្មាន?",
        "hint": "Mechanical advantage of an inclined plane is the length of the incline divided by its height.",
        "answerOptions": [
            {"text": "5", "rationale": "This is the correct mechanical advantage, calculated as $MA = \\text{Length} / \\text{Height} = 5 \\text{ m} / 1 \\text{ m} = 5$.", "isCorrect": true},
            {"text": "0.2", "rationale": "This result is the inverse of the correct mechanical advantage.", "isCorrect": false},
            {"text": "4", "rationale": "This answer might result from subtracting height from length.", "isCorrect": false},
            {"text": "6", "rationale": "This answer might result from adding length and height.", "isCorrect": false}
        ]
    },
    // Grade 9 - Chapter 4: Electromagnetism
    // Lesson 5: Transformers (Formula-focused)
    {
        "question": "ត្រង់ស្វ័រម៉ាទ័រជំរុញមួយមានឧបករណ៏បឋម 100 វេន និងឧបករណ៏អនុវិទ្យាល័យ 500 វេន។ ប្រសិនបើតង់ស្យុងបឋមគឺ 10V តើតង់ស្យុងអនុវិទ្យាល័យប៉ុន្មាន?",
        "hint": "The ratio of voltages in a transformer is equal to the ratio of the number of turns in their respective coils: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$.",
        "answerOptions": [
            {"text": "50 V", "rationale": "This is the correct secondary voltage, found using the transformer equation: $V_s = V_p \\times \\frac{N_s}{N_p} = 10 \\text{ V} \\times \\frac{500}{100} = 50 \\text{ V}$.", "isCorrect": true},
            {"text": "2 V", "rationale": "This result might be obtained if the ratio of turns was inverted in the calculation.", "isCorrect": false},
            {"text": "500 V", "rationale": "This answer might result from multiplying the secondary turns by the primary voltage without considering the ratio.", "isCorrect": false},
            {"text": "10 V", "rationale": "This would imply no change in voltage, which is incorrect for a transformer with different numbers of turns.", "isCorrect": false}
        ]
    },
    {
        "question": "ត្រង់ស្វ័រម៉ាទ័រមួយមានឧបករណ៏បឋម 200 វេន និងឧបករណ៏អនុវិទ្យាល័យ 50 វេន។ ប្រសិនបើតង់ស្យុងបឋមគឺ 20V តើតង់ស្យុងអនុវិទ្យាល័យប៉ុន្មាន?",
        "hint": "This is a step-down transformer. Use the transformer equation.",
        "answerOptions": [
            {"text": "5 V", "rationale": "This is the correct secondary voltage, calculated as $V_s = V_p \\times \\frac{N_s}{N_p} = 20 \\text{ V} \\times \\frac{50}{200} = 5 \\text{ V}$.", "isCorrect": true},
            {"text": "80 V", "rationale": "This result might be obtained if the ratio of turns was inverted.", "isCorrect": false},
            {"text": "100 V", "rationale": "This answer might result from an incorrect multiplication.", "isCorrect": false},
            {"text": "20 V", "rationale": "This would imply no change in voltage, which is incorrect for a transformer.", "isCorrect": false}
        ]
    },
    {
        "question": "ខ្សែចម្លងត្រង់មួយមានប្រវែង 0.5m ផ្ទុកចរន្ត 3A ស្ថិតនៅក្នុងដែនម៉ាញេទិច 0.4T ដែលកែងគ្នាទៅនឹងខ្សែចម្លង។ តើកម្លាំងម៉ាញេទិចប៉ុន្មាន?",
        "hint": "The magnetic force on a current-carrying wire is $F = BIL\\sin\\theta$. Since it's perpendicular, $\\sin\\theta = 1$.",
        "answerOptions": [
            {"text": "0.6 N", "rationale": "This is the correct magnetic force, calculated as $F = 0.4 \\text{ T} \\times 3 \\text{ A} \\times 0.5 \\text{ m} = 0.6 \\text{ N}$.", "isCorrect": true},
            {"text": "6 N", "rationale": "This result might be obtained if there was a decimal error in the calculation.", "isCorrect": false},
            {"text": "0.06 N", "rationale": "This answer is too small, indicating a possible error in the magnitude.", "isCorrect": false},
            {"text": "1.2 N", "rationale": "This answer might result from an incorrect multiplication or an extra factor.", "isCorrect": false}
        ]
    },
    // Grade 9 - Conceptual Questions (from various chapters)
    {
        "question": "តើអ្វីជាច្បាប់ទីបីរបស់ញូតុន (Newton's Third Law)?",
        "hint": "Think about action-reaction pairs.",
        "answerOptions": [
            {"text": "កម្លាំងស្មើនឹងម៉ាស់គុណនឹងសំទុះ។", "rationale": "This option is incorrect; this is Newton's Second Law.", "isCorrect": false},
            {"text": "អង្គធាតុនៅនឹងកន្លែងនឹងនៅតែនឹងកន្លែង។", "rationale": "This option is incorrect; this is part of Newton's First Law.", "isCorrect": false},
            {"text": "សម្រាប់រាល់សកម្មភាព តែងតែមានប្រតិកម្មស្មើគ្នា និងផ្ទុយគ្នា។", "rationale": "ច្បាប់ទីបីរបស់ញូតុនចែងថា សម្រាប់រាល់សកម្មភាព តែងតែមានប្រតិកម្មស្មើគ្នា និងផ្ទុយគ្នា។", "isCorrect": true},
            {"text": "ថាមពលមិនអាចបង្កើត ឬបំផ្លាញបានទេ។", "rationale": "This option is incorrect; this is the Law of Conservation of Energy.", "isCorrect": false}
        ]
    },
    {
        "question": "តើអ្វីជាប្រសិទ្ធភាព (Efficiency) របស់ម៉ាស៊ីនត្រូវបានគណនាដោយរបៀបណា?",
        "hint": "It's the ratio of useful output to total input.",
        "answerOptions": [
            {"text": "កម្មន្តបញ្ចូលចែកនឹងកម្មន្តចេញ។", "rationale": "This option is incorrect; efficiency is output divided by input.", "isCorrect": false},
            {"text": "កម្មន្តចេញចែកនឹងកម្មន្តបញ្ចូល គុណនឹង 100% ។", "rationale": "ប្រសិទ្ធភាពរបស់ម៉ាស៊ីនត្រូវបានគណនាជាកម្មន្តចេញចែកនឹងកម្មន្តបញ្ចូល គុណនឹង 100% ។", "isCorrect": true},
            {"text": "អានុភាពគុណនឹងពេលវេលា។", "rationale": "This option is incorrect; this calculates energy, not efficiency.", "isCorrect": false},
            {"text": "កម្លាំងគុណនឹងចម្ងាយ។", "rationale": "This option is incorrect; this calculates work, not efficiency.", "isCorrect": false}
        ]
    }
];
