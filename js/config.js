const regexObject = {
    low: [/[a-z]+/, /[^a-z]+/],
    upp: [/[A-Z]+/, /[^A-Z]+/],
    name: [/^[a-z A-Z-éè^éôîûñ]+$/],
    text: [/^[a-z A-Z-éè^éôîûñ.]+$/],
    hyp: [/-/],
    num: [/\d+/, /\D+/],
    alu: [/[\w-]+/],
    spe: [/[&é#-è\\çà@$£%*µ,?;.:/!§<>]+/],
    mi3: [/.{3}/],
    mi8: [/.{8}/],
    email: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
    password: [/^[\w]$/]
}

const inputType = {
    text: 'name mi3',
    number: 'num',
    password: 'low upp hyp spe mi8',
    email: "email",
    address: "text mi8"

}

const alertMsg = {
    low: "une minuscule",
    upp: "une majuscule",
    hyp: "tiret",
    num: "un chiffre",
    alu: "alfa-numérique",
    spe: "caractère spéciaux",
    mi3: "3 caractères minimum",
    mi8: "8 caractères minimum",
    email: "heu incorrecte",
    name: "des caractères alphabétiques",
    text: "alfa-numérique et ponctuation"
}

export {regexObject, inputType, alertMsg}