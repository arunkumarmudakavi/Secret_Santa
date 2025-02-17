import { mongoose, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const csvSchema = new Schema(
  {
    employeeDetails: {
        type: Object,
        required: true,
        lowercase: true,
        trim: true
    },
    // employeeEmail: {
    //     type: String,
    //     required: true,
    //     lowercase: true,
    //     trim: true
    // }
  },
  {
    timestamps: true,
  }
);

csvSchema.plugin(mongooseAggregatePaginate);

export const csvModel = mongoose.model("csvModel", csvSchema);
