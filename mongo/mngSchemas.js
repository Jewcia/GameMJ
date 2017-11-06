module.exports = function (mongoose) {

    var Schema = mongoose.Schema;

    var userSchema = new Schema(
        {
            username: { type: String, required: true },
            password: { type: String, required: true }
        });
    var lbSchema = new Schema(
       {
           user1: { type: String, required: true },
           user2: { type: String, required: true },
           stage: { type: String, required: true },
           time: { type: Number, required: true }
       });

    var models = {
        User: mongoose.model("User", userSchema),
        Leaderboards: mongoose.model("Leaderboards", lbSchema) , 
    }

    return models;

}