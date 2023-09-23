module.exports = [{
    name: "slashpanel",
    aliases: ['sp'],
    code: `
$color[$getVar[color]]
$title[1;Slash Panel]
$description[1;
Slash setting panel
]
$addButton[1;Delete Slash;4;delete-slash_$authorID;no;🗑️]
$addButton[1;Get Slash ID;1;get-slashid_$authorID;no;🆔]
$addButton[1;Create Slash;3;create-slash_$authorID;no;📝]
`
}]