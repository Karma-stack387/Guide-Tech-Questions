      console.log("%c⚠️ ATTENTION ⚠️", "color: red; font-size: 20px;");
      console.log("Ce code est la propriété de 祐 Nuclear Whisper 智");
      console.log("Toute copie non autorisée sera poursuivie");
    // Fonction debounce définie globalement
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Traductions complètes
        const translations = {
            fr: {
                    // Header et contrôles
                    "search-placeholder": "Rechercher...",
                    "theme-text": "Thème",
                    "font-size-text": "Taille du texte",
                    "contrast-text": "Contraste",
                    "lang-text": "Fr",
                    "back-to-top": "Retour en haut de la page",
                    "toc-title": "Table des matières",
                    
                    // Table des matières
                    "toc-intro": "Introduction",
                    "toc-problem": "Le problème",
                    "toc-guidelines": "Les lignes directrices",
                    "toc-examples": "Bonnes et mauvaises questions",
                    "toc-not_losing": "Ne pas réagir comme un perdant",
                    "toc-asking": "Quand tu demandes",
                    "toc-answers": "Interpréter les réponses",
                    "toc-classic": "Questions à ne pas poser",
                    "toc-example": "Exemples pratiques",
                    "toc-etiquette": "Étiquette et bonnes pratiques",
                    "toc-tips": "Astuces et techniques avancées",
                    "toc-conclusion": "Conclusion",
                    "toc-disclaimer": "Clauses de droit d'auteur",
                    
                    // Contenu principal
                    "title": "Comment poser des questions de manière intelligente",
                    "author": "Auteur",
                    "author-name": "祐 ☣︎ 𝐊𝐢𝐥𝐥𝐮𝐚_𝐒𝐡𝐢𝐨𝐤𝐚 ☣︎  智",
                    "publish-date": "Date de publication",
                    "date-value": "02 Septembre 2025",
                    "copyright": "© 2025 祐 𝐍𝐮𝐜𝐥𝐞𝐚𝐫 𝐖𝐡𝐢𝐬𝐩𝐞𝐫 智 ❏ ⌜𝐓𝐄𝐂𝐇⌟ ❏. Tous droits réservés. Code source protégé par licence MIT.",
                    
                    // Sections
                    "intro-title": "Introduction",
                    "intro-content": "Dans un monde où l'information est à portée de main, il est crucial de savoir comment la chercher efficacement. Que ce soit sur un forum de développeurs, un groupe d'assistance ou une plateforme de questions-réponses, la qualité de votre question détermine la qualité de la réponse que vous obtiendrez. Ce guide vous apprendra à formuler des questions claires, concises et pertinentes.",
                    "cost-title": "Le coût d'une mauvaise question",
                    "cost-content": "Une question mal posée ne fait pas seulement perdre du temps à l'expert. Elle vous coûte également :",
                    "cost-item1": "Du temps d'attente pour une réponse qui ne viendra peut-être jamais",
                    "cost-item2": "Une réputation endommagée dans la communauté",
                    "cost-item3": "Des opportunités d'apprentissage manquées",
                    "cost-item4": "La possibilité de recevoir de l'aide à l'avenir",
                    "intro-content2": "Maintenant que l'utilisation de l'open source s'est généralisée, on peut souvent obtenir des réponses aussi pertinentes de la part d'utilisateurs plus expérimentés que de hackers. C'est une bonne chose : les utilisateurs ont tendance à être un peu plus tolérants face aux échecs fréquents des débutants.",
                    "intro-content3": "Ce guide est conçu pour vous. Il a été pensé pour vous aider à progresser en comprenant les bases de la collaboration et de l'entraide. Il vous enseignera comment poser des questions pour obtenir des réponses utiles. Comprenez bien ceci : nous, les développeurs, ne sommes pas des machines à résoudre tous les problèmes du monde. Les bonnes questions sont celles qui ont déjà un minimum de travail derrière elles. Elles sont stimulantes et nous incitent à répondre.",
                    "quote": "Poser une bonne question, c'est déjà avoir la moitié de la réponse. - Proverbe de développeur",
                    
                    "problem-title": "Le problème",
                    "problem-content": "Beaucoup de questions posées en ligne sont vagues, incomplètes ou manquent de contexte. Cela rend la tâche difficile pour les personnes qui souhaitent vous aider. Une question mal formulée peut non seulement vous faire perdre du temps, mais aussi décourager les autres de vous répondre, car ils ne savent pas par où commencer.",
                    "bad-example-title": "Mauvais exemple :",
                    "bad-example-content": "« Mon code ne marche pas. Aidez-moi ! »",
                    "bad-example-desc": "Cette question ne fournit aucune information sur le langage, le problème ou ce qui a été déjà tenté. Il est impossible d'y répondre sans demander plus de détails.",
                    
                    "guidelines-title": "Les lignes directrices",
                    "guidelines-content": "Pour poser une question de manière intelligente, suivez ces étapes clés :",
                    "procedure-title": "Procédure :",
                    "procedure-step1": "Décrivez clairement le problème.",
                    "procedure-step2": "Fournissez le contexte nécessaire.",
                    "procedure-step3": "Incluez un exemple minimal, reproductible et complet (MRE).",
                    "procedure-step4": "Expliquez ce que vous avez déjà essayé.",
                    "procedure-step5": "Indiquez ce que vous attendez comme résultat.",
                    
                    "examples-title": "Bonnes et mauvaises questions",
                    "examples-content": "Pour illustrer la différence entre une question intelligente et une question stupide, voici quelques exemples concrets.",
                    "bad-question-title": "Mauvaise question",
                    "bad-question-content": "Mon code ne marche pas. Quelqu'un peut m'aider ?",
                    "bad-question-why": "Pourquoi c'est mauvais :",
                    "bad-question-reason1": "Aucun détail sur le problème",
                    "bad-question-reason2": "Aucun code fourni",
                    "bad-question-reason3": "Aucune indication sur ce qui a été tenté",
                    "bad-question-reason4": "Montre un manque d'effort évident",
                    
                    "good-question-title": "Bonne question",
                    "good-question-content": "Bonjour, j'essaie de faire X avec Y, mais j'obtiens l'erreur Z. J'ai déjà consulté la documentation officielle à cette adresse et essayé les solutions A et B. Voici le code pertinent : print(\"salut\"). Quelqu'un aurait-il une idée de ce que je fais mal ?",
                    "good-question-why": "Pourquoi c'est bon :",
                    "good-question-reason1": "Contexte clair et précis",
                    "good-question-reason2": "Montre les recherches effectuées",
                    "good-question-reason3": "Fournit le code nécessaire",
                    "good-question-reason4": "Respectueux et poli",
                    
                    "not-losing-title": "Ne pas réagir comme un perdant",
                    "not-losing-content1": "Les hackers respectent la compétence et le travail, pas la faiblesse et l'impuissance. Quand vous obtenez une réponse qui vous déplaît, ne vous plaignez pas. Si vous vous lamentez, si vous criez à l'injustice, ou si vous exigez une autre réponse, vous prouvez simplement que vous ne comprenez pas comment ce monde fonctionne. Ne réagissez pas de manière agressive, c'est la meilleure façon de vous faire ignorer définitivement.",
                    "not-losing-content2": "Votre objectif est de résoudre votre problème, pas de vous plaindre. Restez calme, restez concentré, et si vous ne comprenez pas la réponse, continuez de chercher. Les bons hackers résolvent leurs propres problèmes, ils ne s'attendent pas à ce que les autres le fassent pour eux.",
                    
                    "asking-title": "Quand tu demandes",
                    "asking-content1": "Le choix du canal est crucial. Vous serez ignoré si vous vous trompez. Les hackers ne tolèrent pas les questions mal ciblées ou hors sujet. Si vous postez votre question sur un forum où elle n'a pas sa place, ou si vous envoyez un e-mail à une personne qui n'a rien à voir avec votre problème, vous perdez votre temps et vous nous faites perdre le nôtre.",
                    "asking-content2": "Faites preuve de discernement. Choisissez un forum adapté au niveau de votre question. Ne postez pas en double sur plusieurs groupes. Montrez que vous avez respecté les règles de la communauté avant de demander de l'aide.",
                    
                    "answers-title": "Interpréter les réponses",
                    "answers-content1": "Vous avez posé votre question. Félicitations. Maintenant, apprenez à lire les réponses. Il se peut qu'elles soient brèves, sèches, voire qu'elles vous renvoient à un manuel. Ce n'est pas un manque de respect. C'est simplement que les hackers sont des gens occupés. Quand une réponse est brève, elle est souvent précise. Lisez-la attentivement.",
                    "answers-content2": "N'ayez pas peur des retours directs, ils sont là pour vous aider à progresser. Si la réponse vous pointe vers une documentation, c'est que la solution s'y trouve déjà. Si vous ne comprenez toujours pas, c'est peut-être que vous devez réviser les bases.",
                    
                    "classic-title": "Questions à ne pas poser",
                    "classic-content1": "Il existe des questions qui ne méritent même pas d'être posées, car elles ne demandent qu'une recherche rapide et de la bonne volonté. Si vous demandez quelque chose qui peut être trouvé en cinq minutes sur Google, vous montrez que vous ne respectez pas notre temps, et le vôtre.",
                    "classic-content2": "Voici quelques exemples de questions à éviter :",
                    "classic-example1": "Comment je fais pour... ? (sans avoir cherché)",
                    "classic-example2": "Quelqu'un peut-il m'aider ? (sans donner de détails)",
                    "classic-example3": "Pourquoi ça ne marche pas ? (sans code ni contexte)",
                    "classic-example4": "Est-ce que je peux vous poser une question ? (posez-la directement)",
                    "classic-content3": "Ces questions sont le signe d'un manque d'effort. Si vous voulez de l'aide, montrez que vous avez déjà essayé. Sinon, vous serez ignoré.",
                    
                    "example-title": "Exemples pratiques",
                    "example-content": "Voyons comment appliquer les lignes directrices pour transformer une mauvaise question en une bonne question.",
                    "good-example-title": "Bon exemple :",
                    "good-example-content": "Je rencontre une erreur de syntaxe dans mon script Python. L'erreur 'SyntaxError: invalid syntax' se produit à la ligne 5. J'ai un dictionnaire et j'essaie d'accéder à une clé qui n'existe pas. J'ai déjà vérifié l'orthographe de la clé. Je m'attendais à ce que le code affiche un message d'erreur clair au lieu de se bloquer. Voici mon code :",
                    "good-example-desc": "Cette question fournit toutes les informations nécessaires pour une réponse rapide et précise. Le problème est clairement identifié, le contexte est donné, le code est inclus et l'attente est expliquée.",
                    
                    "etiquette-title": "Étiquette et bonnes pratiques",
                    "etiquette-content": "Poser une bonne question, c'est aussi une question de respect envers la communauté. Voici quelques conseils supplémentaires :",
                    "etiquette-tip1": "Faites une recherche avant de poser la question. Votre problème a peut-être déjà été résolu.",
                    "etiquette-tip2": "Soyez poli et remerciez la personne qui vous aide.",
                    "etiquette-tip3": "N'oubliez pas de mettre à jour votre question si vous trouvez la solution par vous-même.",
                    "etiquette-tip4": "Marquez la réponse comme acceptée si elle a résolu votre problème, pour aider d'autres personnes.",
                    "etiquette-tip5": "Utilisez un titre clair et descriptif pour votre question",
                    "etiquette-tip6": "Formatez correctement votre code",
                    "pro-tip-title": "Astuce pro",
                    "pro-tip-content": "Utilisez des liens vers la documentation officielle et des références si possible pour donner encore plus de contexte à votre question.",
                    
                    "tips-title": "Astuces et techniques avancées",
                    "tips-content": "Maintenant que vous connaissez les bases, voici quelques astuces pour passer au niveau supérieur.",
                    "mirror-technique-title": "La technique du miroir",
                    "mirror-technique-content": "Avant de poster votre question, essayez de vous mettre à la place de ceux qui vont la lire. Est-ce qu'elle est claire ? Est-ce qu'elle montre que vous avez fait des efforts ? Si vous étiez à leur place, est-ce que vous prendriez le temps d'y répondre ?",
                    "patience-title": "L'art de la patience",
                    "patience-content": "Ne vous attendez pas à une réponse immédiate. Les experts sont occupés. Si vous ne recevez pas de réponse tout de suite, ne repostez pas votre question. Attendez au moins 24 heures avant de suivre.",
                    "become-solution-title": "Devenir la solution",
                    "become-solution-content": "Le but ultime n'est pas de toujours demander de l'aide, mais de devenir capable de résoudre vos propres problèmes. À mesure que vous progressez, essayez de répondre aux questions des autres. C'est la meilleure façon de solidifier vos connaissances et de gagner le respect de la communauté.",
                    "checklist-title": "Checklist avant de poster :",
                    "checklist-item1": "J'ai cherché sur Google et dans les archives du forum",
                    "checklist-item2": "J'ai lu la documentation pertinente",
                    "checklist-item3": "J'ai essayé de résoudre le problème par moi-même",
                    "checklist-item4": "J'ai fourni tous les détails nécessaires",
                    "checklist-item5": "J'ai relu ma question pour qu'elle soit claire et concise",
                    "checklist-item6": "J'ai choisi le bon canal pour ma question",
                    
                    "conclusion-title": "Conclusion",
                    "conclusion-quote": "Une question bien posée est à moitié répondue.",
                    "conclusion-content": "Apprendre à poser des questions intelligentes est une compétence précieuse qui vous fera gagner du temps et vous aidera à construire une bonne réputation en ligne. En suivant ce guide, vous obtiendrez non seulement des réponses plus rapidement, mais vous contribuerez aussi à la qualité des échanges au sein de la communauté.",
                    
                    "disclaimer-title": "Clauses de droit d'auteur",
                    "disclaimer-attention": "À l'attention des utilisateurs :",
                    "disclaimer-content1": "Ce site a été créé avec expertise et effort. Toute tentative de s'approprier son contenu, de le revendiquer comme votre création ou de l'utiliser à des fins commerciales sans permission sera traitée comme une violation flagrante de nos droits. Le plagiat est strictement interdit et aura des conséquences immédiates.Nous protégeons notre travail avec la plus grande fermeté.",
                    "disclaimer-warning": "N'essayez pas de nous poser des questions en privé. Nous vous ignorerons.",
                    "copyright-title": "Droits d'auteur et utilisation du contenu :",
                    "copyright-item1": "1. Le contenu est notre propriété.",
                    "copyright-content1": "Tout ce qui est publié ici est notre propriété exclusive. Il est protégé par le droit d'auteur. Cependant, le partage personnel (par exemple, transférer à un ami ou à une petite communauté) est autorisé. La distribution à des fins commerciales est strictement interdite.",
                    "copyright-item2": "2. Utilisation pour votre cerveau, pas pour votre business.",
                    "copyright-content2": "Ce contenu est là pour votre usage personnel, pour vous rendre plus malin. Ne le vendez pas, ne le monétisez pas, ne le réutilisez pas pour votre propre projet commercial.",
                    "copyright-warning": "En vous abonnant, vous avez accepté ces conditions. Maintenant, agissez en conséquence."
                },
                en: {
                    // Header et contrôles
                    "search-placeholder": "Search...",
                    "theme-text": "Theme",
                    "font-size-text": "Text Size",
                    "contrast-text": "Contrast",
                    "lang-text": "En",
                    "back-to-top": "Back to top",
                    "toc-title": "Table of Contents",
                    
                    // Table des matières
                    "toc-intro": "Introduction",
                    "toc-problem": "The Problem",
                    "toc-guidelines": "Guidelines",
                    "toc-examples": "Good and Bad Questions",
                    "toc-not_losing": "How Not To React Like a Loser",
                    "toc-asking": "When You Ask",
                    "toc-answers": "Interpreting Answers",
                    "toc-classic": "Questions To Avoid",
                    "toc-example": "Practical Examples",
                    "toc-etiquette": "Etiquette and Best Practices",
                    "toc-tips": "Tips and Advanced Techniques",
                    "toc-conclusion": "Conclusion",
                    "toc-disclaimer": "Copyright Clauses",
                    
                    // Contenu principal
                    "title": "How To Ask Questions The Smart Way",
                    "author": "Author",
                    "author-name": "祐 ☣︎ 𝐊𝐢𝐥𝐥𝐮𝐚_𝐒𝐡𝐢𝐨𝐤𝐚 ☣︎ 智",
                    "publish-date": "Publication Date",
                    "date-value": "September 02, 2025",
                    "copyright": "© 2025 祐 𝐍𝐮𝐜𝐥𝐞𝐚𝐫 𝐖𝐡𝐢𝐬𝐩𝐞𝐫 智 ❏ ⌜𝐓𝐄𝐂𝐇⌟ ❏. All rights reserved. Source code protected by MIT license.",
                    
                    // Sections
                    "intro-title": "Introduction",
                    "intro-content": "In a world where information is at your fingertips, it's crucial to know how to search for it effectively. Whether on a developer forum, support group, or Q&A platform, the quality of your question determines the quality of the answer you'll get. This guide will teach you how to formulate clear, concise, and relevant questions.",
                    "cost-title": "The Cost of a Bad Question",
                    "cost-content": "A poorly asked question doesn't just waste the expert's time. It also costs you:",
                    "cost-item1": "Waiting time for an answer that may never come",
                    "cost-item2": "Damaged reputation in the community",
                    "cost-item3": "Missed learning opportunities",
                    "cost-item4": "The possibility of receiving help in the future",
                    "intro-content2": "Now that the use of open source has become widespread, one can often get answers just as relevant from more experienced users than from hackers. This is a good thing: users tend to be a bit more tolerant of the frequent failures of beginners.",
                    "intro-content3": "This guide is designed for you. It was created to help you progress by understanding the basics of collaboration and mutual aid. It will teach you how to ask questions to get useful answers. Understand this well: we developers are not machines to solve all the world's problems. Good questions are those that already have some work behind them. They are stimulating and encourage us to respond.",
                    "quote": "Asking a good question is already having half the answer. - Developer Proverb",
                    
                    "problem-title": "The Problem",
                    "problem-content": "Many questions asked online are vague, incomplete, or lack context. This makes it difficult for people who want to help you. A poorly worded question can not only waste your time but also discourage others from answering you because they don't know where to start.",
                    "bad-example-title": "Bad example:",
                    "bad-example-content": "\"My code doesn't work. Help me!\"",
                    "bad-example-desc": "This question provides no information about the language, the problem, or what has already been tried. It's impossible to answer without asking for more details.",
                    
                    "guidelines-title": "Guidelines",
                    "guidelines-content": "To ask a question intelligently, follow these key steps:",
                    "procedure-title": "Procedure:",
                    "procedure-step1": "Clearly describe the problem.",
                    "procedure-step2": "Provide the necessary context.",
                    "procedure-step3": "Include a Minimal, Reproducible, and Complete Example (MRE).",
                    "procedure-step4": "Explain what you've already tried.",
                    "procedure-step5": "Indicate what you expect as a result.",
                    
                    "examples-title": "Good and Bad Questions",
                    "examples-content": "To illustrate the difference between a smart question and a stupid question, here are some concrete examples.",
                    "bad-question-title": "Bad question",
                    "bad-question-content": "My code doesn't work. Can someone help me?",
                    "bad-question-why": "Why it's bad:",
                    "bad-question-reason1": "No details about the problem",
                    "bad-question-reason2": "No code provided",
                    "bad-question-reason3": "No indication of what has been tried",
                    "bad-question-reason4": "Shows an obvious lack of effort",
                    
                    "good-question-title": "Good question",
                    "good-question-content": "Hello, I'm trying to do X with Y, but I'm getting error Z. I've already consulted the official documentation at this address and tried solutions A and B. Here's the relevant code: print(\"hello\"). Would anyone have an idea what I'm doing wrong?",
                    "good-question-why": "Why it's good:",
                    "good-question-reason1": "Clear and precise context",
                    "good-question-reason2": "Shows research done",
                    "good-question-reason3": "Provides necessary code",
                    "good-question-reason4": "Respectful and polite",
                    
                    "not-losing-title": "How Not To React Like a Loser",
                    "not-losing-content1": "Hackers respect competence and work, not weakness and helplessness. When you get an answer you don't like, don't complain. If you whine, if you cry injustice, or if you demand another answer, you're just proving that you don't understand how this world works. Don't react aggressively, it's the best way to get ignored permanently.",
                    "not-losing-content2": "Your goal is to solve your problem, not to complain. Stay calm, stay focused, and if you don't understand the answer, keep looking. Good hackers solve their own problems, they don't expect others to do it for them.",
                    
                    "asking-title": "When You Ask",
                    "asking-content1": "The choice of channel is crucial. You will be ignored if you make a mistake. Hackers do not tolerate poorly targeted or off-topic questions. If you post your question on a forum where it doesn't belong, or if you send an email to a person who has nothing to do with your problem, you waste your time and ours.",
                    "asking-content2": "Use discernment. Choose a forum appropriate for the level of your question. Don't double post on multiple groups. Show that you have respected the community rules before asking for help.",
                    
                    "answers-title": "Interpreting Answers",
                    "answers-content1": "You've asked your question. Congratulations. Now, learn to read the answers. They may be brief, dry, or even refer you to a manual. This is not disrespect. It's just that hackers are busy people. When an answer is brief, it's often precise. Read it carefully.",
                    "answers-content2": "Don't be afraid of direct feedback, it's there to help you progress. If the answer points you to documentation, it's because the solution is already there. If you still don't understand, maybe you need to review the basics.",
                    
                    "classic-title": "Questions To Avoid",
                    "classic-content1": "There are questions that don't even deserve to be asked, because they only require a quick search and good will. If you ask something that can be found in five minutes on Google, you show that you don't respect our time, and yours.",
                    "classic-content2": "Here are some examples of questions to avoid:",
                    "classic-example1": "How do I...? (without having searched)",
                    "classic-example2": "Can someone help me? (without giving details)",
                    "classic-example3": "Why doesn't it work? (without code or context)",
                    "classic-example4": "Can I ask you a question? (ask it directly)",
                    "classic-content3": "These questions are a sign of a lack of effort. If you want help, show that you've already tried. Otherwise, you'll be ignored.",
                    
                    "example-title": "Practical Examples",
                    "example-content": "Let's see how to apply the guidelines to turn a bad question into a good question.",
                    "good-example-title": "Good example:",
                    "good-example-content": "I'm encountering a syntax error in my Python script. The error 'SyntaxError: invalid syntax' occurs at line 5. I have a dictionary and I'm trying to access a key that doesn't exist. I've already checked the spelling of the key. I expected the code to display a clear error message instead of crashing. Here's my code:",
                    "good-example-desc": "This question provides all the necessary information for a quick and precise response. The problem is clearly identified, context is given, code is included, and expectations are explained.",
                    
                    "etiquette-title": "Etiquette and Best Practices",
                    "etiquette-content": "Asking a good question is also a matter of respect for the community. Here are some additional tips:",
                    "etiquette-tip1": "Do research before asking the question. Your problem may have already been solved.",
                    "etiquette-tip2": "Be polite and thank the person who helps you.",
                    "etiquette-tip3": "Don't forget to update your question if you find the solution yourself.",
                    "etiquette-tip4": "Mark the answer as accepted if it solved your problem, to help other people.",
                    "etiquette-tip5": "Use a clear and descriptive title for your question",
                    "etiquette-tip6": "Format your code properly",
                    "pro-tip-title": "Pro tip",
                    "pro-tip-content": "Use links to official documentation and references if possible to give even more context to your question.",
                    
                    "tips-title": "Tips and Advanced Techniques",
                    "tips-content": "Now that you know the basics, here are some tips to take it to the next level.",
                    "mirror-technique-title": "The mirror technique",
                    "mirror-technique-content": "Before posting your question, try to put yourself in the shoes of those who will read it. Is it clear? Does it show that you've made an effort? If you were in their place, would you take the time to answer it?",
                    "patience-title": "The art of patience",
                    "patience-content": "Don't expect an immediate response. Experts are busy. If you don't get a response right away, don't repost your question. Wait at least 24 hours before following up.",
                    "become-solution-title": "Becoming the solution",
                    "become-solution-content": "The ultimate goal is not to always ask for help, but to become capable of solving your own problems. As you progress, try to answer other people's questions. It's the best way to solidify your knowledge and earn the respect of the community.",
                    "checklist-title": "Checklist before posting:",
                    "checklist-item1": "I've searched on Google and in the forum archives",
                    "checklist-item2": "I've read the relevant documentation",
                    "checklist-item3": "I've tried to solve the problem myself",
                    "checklist-item4": "I've provided all necessary details",
                    "checklist-item5": "I've reread my question to make sure it's clear and concise",
                    "checklist-item6": "I've chosen the right channel for my question",
                    
                    "conclusion-title": "Conclusion",
                    "conclusion-quote": "A well-asked question is half answered.",
                    "conclusion-content": "Learning to ask smart questions is a valuable skill that will save you time and help you build a good online reputation. By following this guide, you will not only get answers faster, but you will also contribute to the quality of exchanges within the community.",
                    
                    "disclaimer-title": "Copyright Clauses",
                    "disclaimer-attention": "To the attention of users:",
                    "disclaimer-content1": "This site was created with expertise and effort. Any attempt to appropriate its content, claim it as your own creation, or use it for commercial purposes without permission will be treated as a blatant violation of our rights. Plagiarism is strictly prohibited and will have immediate consequences.We protect our work with the utmost resolve.",
                    "disclaimer-warning": "Don't try to ask us questions in private. We will ignore you.",
                    "copyright-title": "Copyright and content usage:",
                    "copyright-item1": "1. The content is our property.",
                    "copyright-content1": "Everything published here is our exclusive property. It is protected by copyright. However, personal sharing (for example, transferring to a friend or small community) is allowed. Distribution for commercial purposes is strictly prohibited.",
                    "copyright-item2": "2. Use for your brain, not for your business.",
                    "copyright-content2": "This content is there for your personal use, to make you smarter. Don't sell it, don't monetize it, don't reuse it for your own commercial project.",
                    "copyright-warning": "By subscribing, you have accepted these terms. Now, act accordingly."
                }
            };

        let currentLang = 'fr';
        let latestSearchTerm = ''; // Pour gérer les recherches obsolètes
        let updateActiveNav; // Déclaration de la fonction pour la rendre accessible

        // Fonctions utilitaires
        function updateLanguage() {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });
            
            document.getElementById('search-input').setAttribute('placeholder', translations[currentLang]["search-placeholder"]);
            document.getElementById('search-input-mobile').setAttribute('placeholder', translations[currentLang]["search-placeholder"]);
            
            document.documentElement.lang = currentLang;
            document.querySelector('.back-to-top').setAttribute('aria-label', translations[currentLang]["back-to-top"]);
            
            document.querySelectorAll('.lang-toggle span').forEach(span => {
                span.textContent = translations[currentLang]["lang-text"];
            });
        }

        // Gestion du menu mobile
        function initMobileMenu() {
            const menuToggle = document.querySelector('.menu-toggle');
            const mobileMenu = document.querySelector('.mobile-menu');
            const overlay = document.querySelector('.menu-overlay');
            
            if (!menuToggle || !mobileMenu || !overlay) return;

            function toggleMenu(isOpen) {
                menuToggle.classList.toggle('active', isOpen);
                mobileMenu.classList.toggle('active', isOpen);
                overlay.classList.toggle('active', isOpen);
                document.body.style.overflow = isOpen ? 'hidden' : '';
                menuToggle.setAttribute('aria-expanded', isOpen);
                mobileMenu.setAttribute('aria-hidden', !isOpen);
            }

            menuToggle.addEventListener('click', () => {
                const isOpen = !mobileMenu.classList.contains('active');
                toggleMenu(isOpen);
            });

            overlay.addEventListener('click', () => toggleMenu(false));

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    toggleMenu(false);
                }
            });

            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => toggleMenu(false));
            });
        }

        // Gestion du thème
        function initTheme() {
            const themeToggles = document.querySelectorAll('.theme-toggle');
            
            function updateThemeIcon(isDark) {
                themeToggles.forEach(toggle => {
                    const icon = toggle.querySelector('i');
                    // Réinitialiser les classes avant d'ajouter la bonne
                    icon.classList.remove('fa-moon', 'fa-sun');
                    if (isDark) {
                        icon.classList.add('fa-sun');
                    } else {
                        icon.classList.add('fa-moon');
                    }
                });
            }

            themeToggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    document.body.classList.toggle('dark-theme');
                    const isDark = document.body.classList.contains('dark-theme');
                    localStorage.setItem('theme', isDark ? 'dark' : 'light');
                    updateThemeIcon(isDark);
                });
            });

            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.body.classList.add('dark-theme');
                updateThemeIcon(true);
            } else {
                updateThemeIcon(false);
            }
        }

        // Gestion de la taille du texte
        function initFontSize() {
            const fontSizeToggles = document.querySelectorAll('.font-size-toggle');
            let fontSizeLevel = 0;
            const fontSizeClasses = ['normal', 'large', 'larger'];
            
            fontSizeToggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    document.body.classList.remove(...fontSizeClasses);
                    fontSizeLevel = (fontSizeLevel + 1) % fontSizeClasses.length;
                    document.body.classList.add(fontSizeClasses[fontSizeLevel]);
                    localStorage.setItem('fontSize', fontSizeClasses[fontSizeLevel]);
                });
            });
            
            const savedFontSize = localStorage.getItem('fontSize');
            if (savedFontSize) {
                document.body.classList.add(savedFontSize);
                fontSizeLevel = fontSizeClasses.indexOf(savedFontSize);
            }
        }

        // Gestion du contraste élevé
        function initHighContrast() {
            const contrastToggles = document.querySelectorAll('.high-contrast-toggle');
            contrastToggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    document.body.classList.toggle('high-contrast');
                    const isHighContrast = document.body.classList.contains('high-contrast');
                    localStorage.setItem('highContrast', isHighContrast ? 'true' : 'false');
                });
            });

            const savedContrast = localStorage.getItem('highContrast');
            if (savedContrast === 'true') {
                document.body.classList.add('high-contrast');
            }
        }

        // Gestion de la langue
        function initLanguage() {
            const langToggles = document.querySelectorAll('.lang-toggle');
            langToggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    currentLang = currentLang === 'fr' ? 'en' : 'fr';
                    localStorage.setItem('lang', currentLang);
                    updateLanguage();
                    
                    toggle.querySelector('span').textContent = currentLang === 'fr' ? 'Fr' : 'En';
                });
            });

            const savedLang = localStorage.getItem('lang');
            if (savedLang && savedLang !== currentLang) {
                currentLang = savedLang;
                updateLanguage();
                langToggles.forEach(toggle => {
                    toggle.querySelector('span').textContent = currentLang === 'fr' ? 'Fr' : 'En';
                });
            }
        }

        // Gestion de la recherche
        function initSearch() {
            const searchInputs = document.querySelectorAll('#search-input, #search-input-mobile');
            
            const debouncedSearch = debounce((searchTerm) => {
                latestSearchTerm = searchTerm;
                if (searchTerm.length > 2) {
                    highlightText(searchTerm);
                } else {
                    removeHighlights();
                }
            }, 300);

            searchInputs.forEach(input => {
                input.addEventListener('input', (e) => {
                    const searchTerm = e.target.value.trim();
                    debouncedSearch(searchTerm);
                });
            });

            // Dans la fonction initSearch(), améliorer le surlignage
function highlightText(term) {
    if (term !== latestSearchTerm) return;
    
    removeHighlights();
    
    // Ignorer si le terme est trop court
    if (term.length < 2) return;
    
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const article = document.querySelector('.article');
    
    function traverseNodes(node) {
        if (node.nodeType === 3) { // Node.TEXT_NODE
            const matches = node.nodeValue.match(regex);
            if (matches) {
                const newHTML = node.nodeValue.replace(regex, '<span class="highlight">$1</span>');
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newHTML;
                
                const frag = document.createDocumentFragment();
                while (tempDiv.firstChild) {
                    frag.appendChild(tempDiv.firstChild);
                }
                
                node.parentNode.replaceChild(frag, node);
            }
        } else if (node.nodeType === 1 && // Node.ELEMENT_NODE
                  !['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT'].includes(node.tagName) &&
                  !node.classList.contains('highlight')) {
            Array.from(node.childNodes).forEach(child => {
                traverseNodes(child);
            });
        }
    }
    
    traverseNodes(article);
}

            function removeHighlights() {
                const highlights = document.querySelectorAll('.highlight');
                highlights.forEach(highlight => {
                    const parent = highlight.parentNode;
                    parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
                    parent.normalize();
                });
            }
        }

        // Navigation active
        function initActiveNavigation() {
            const sections = document.querySelectorAll('.sect1');
            const navLinks = document.querySelectorAll('.toc a');
            
            updateActiveNav = function() {
                let currentSection = '';
                const scrollPosition = window.scrollY + 150;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        currentSection = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === currentSection) {
                        link.classList.add('active');
                    }
                });
            };
            
            let ticking = false;
            function scrollHandler() {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        updateActiveNav();
                        ticking = false;
                    });
                    ticking = true;
                }
            }
            
            window.addEventListener('scroll', scrollHandler, { passive: true });
            updateActiveNav();
        }

        // Navigation fluide
        function initSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        const offsetTop = target.offsetTop - 100;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        // Bouton retour en haut
        function initBackToTop() {
            const backToTopBtn = document.querySelector('.back-to-top');
            if (!backToTopBtn) return;

            let isVisible = false;
            
            function toggleVisibility() {
                const shouldShow = window.scrollY > 300;
                if (shouldShow !== isVisible) {
                    isVisible = shouldShow;
                    backToTopBtn.classList.toggle('visible', isVisible);
                }
            }

            let ticking = false;
            function scrollHandler() {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        toggleVisibility();
                        ticking = false;
                    });
                    ticking = true;
                }
            }

            window.addEventListener('scroll', scrollHandler, { passive: true });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
                });
            });
        }

        // Gestion des erreurs
        function handleError(error, context) {
            console.error(`Erreur dans ${context}:`, error);
        }

        // Optimisation des performances
        function optimizePerformance() {
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            observer.unobserve(img);
                        }
                    });
                });

                document.querySelectorAll('img[data-src]').forEach(img => {
                    imageObserver.observe(img);
                });
            }

            if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                    document.querySelectorAll('.sect1').forEach(section => {
                        section.style.willChange = 'transform';
                    });
                });
            }
        }

        // Accessibilité améliorée
        function initAccessibility() {
            let isUsingKeyboard = false;

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    isUsingKeyboard = true;
                    document.body.classList.add('keyboard-navigation');
                }
            });

            document.addEventListener('mousedown', () => {
                isUsingKeyboard = false;
                document.body.classList.remove('keyboard-navigation');
            });

            function announceToScreenReader(message) {
                const announcement = document.createElement('div');
                announcement.setAttribute('aria-live', 'polite');
                announcement.setAttribute('aria-atomic', 'true');
                announcement.className = 'sr-only';
                announcement.textContent = message;
                document.body.appendChild(announcement);
                
                setTimeout(() => {
                    document.body.removeChild(announcement);
                }, 1000);
            }

            document.querySelectorAll('.theme-toggle').forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const isDark = document.body.classList.contains('dark-theme');
                    announceToScreenReader(`Thème ${isDark ? 'sombre' : 'clair'} activé`);
                });
            });
        }

        // Gestionnaire de redimensionnement de fenêtre
        function initResizeHandler() {
            let resizeTimeout;
            
            function handleResize() {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    if (typeof updateActiveNav === 'function') {
                        updateActiveNav();
                    }
                    
                    const sidebar = document.querySelector('.sidebar');
                    if (sidebar && window.innerWidth > 900) {
                        sidebar.style.height = `calc(100vh - 80px)`;
                    }
                }, 150);
            }

            window.addEventListener('resize', handleResize, { passive: true });
        }

        // Initialisation principale
        try {
            initMobileMenu();
            initTheme();
            initFontSize();
            initHighContrast();
            initLanguage();
            initSearch();
            initActiveNavigation();
            initSmoothScrolling();
            initBackToTop();
            initAccessibility();
            initResizeHandler();
            optimizePerformance();
            
            console.log('Application initialisée avec succès');
        } catch (error) {
            handleError(error, 'initialisation principale');
        }
    });
