//exempel på hur json format från api skulle kunna se ut
//hämta från forms
//hämta och skicka till users
//hämta och skicka till answers

//om lösningen endast ska vara för madrs så behövs kanske endast questions och users, där answers ligger direkt i user

//totalpoäng räknas ut i appen från answers med userId som nyckel, skickas o hämtas inte.(?)
//medelvärden räknas ut var och hur?

forms = [
    {
        id: "0",
        title: "MADRS",
        questions: [
            {
                title: "Sänkt Grundstämning",
                description: "Avser en sänkning av det emotionella grundläget (till skillnad från situationsutlösta affekter). Omfattar dysterhet, tungsinne och nedstämdhet, som manifesterar sig i mimik, kroppshållning och rörelsemönster. Bedömningen baseras på utpräglingsgrad och avledbarhet. Förhöjd grundstämning skattas ”0” på detta item.",
                choices: [
                    {
                        title: "0",
                        description: "Neutralt stämningsläge"
                    },
                    {
                        title: "1",
                        description: ""
                    },
                    {
                        title: "2",
                        description: "Ser genomgående nedstämd ut, men kan tillfälligt växla till ljusare sinnesstämning."
                    },
                    {
                        title: "3",
                        description: ""
                    },
                    {
                        title: "4",
                        description: "Ser nedstämd och olycklig ut oavsett samtalsämne."
                    },
                    {
                        title: "5",
                        description: ""
                    },
                    {
                        title: "6",
                        description: "Genomgående uttryck för extrem dysterhet, tungsinne eller förtvivlad olycka."
                    }
                ]
            }, {
                title: "Nedstämdhet",
                description: "Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej.Omfattar känslor av sorgsenhet, olycklighet, hopplöshet och hjälplöshet.Bedömningen baseras på intensitet, varaktighet och i vilken grad sinnesstämningenpåverkas av yttre omständigheter. Förhöjd sinnesstämning skattas ”0”",
                choices: [
                    {
                        title: "0",
                        description: "Neutral stämningsläge. Kan känna såväl tillfällig munterhet som nedstämdhet, allt efter omständigheterna, utan övervikt för ena eller andra stämningsläget."
                    },
                    {
                        title: "1",
                        description: ""
                    },
                    {
                        title: "2",
                        description: "Övervägande upplevelser av nedstämdhet men ljusare stunder förekommer."
                    },
                    {
                        title: "3",
                        description: ""
                    },
                    {
                        title: "4",
                        description: "Genomgående nedstämdhet och dyster till sinnes. Sinnesstämningen påverkas föga av yttre omständigheter."
                    },
                    {
                        title: "5",
                        description: ""
                    },
                    {
                        title: "6",
                        description: "Genomgående upplevelser av maximal nedstämdhet."
                    }
                ]
            }
        ]
    }
]

answers = {
    userId: "cami",
    formId: "0",
    answers: [0, null, 2]
}

users = [
    {
        id: "cami",
    }
]