module.exports = {
    name: "$c",
    description: "Comment function (doesn't affect to ur code)",
    usage: "$c[text]",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);
        
        return {
            code: d.util.setCode(data)
            }
        }
}