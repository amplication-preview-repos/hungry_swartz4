/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalysisReportWhereUniqueInput } from "./AnalysisReportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class AnalysisReportFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => AnalysisReportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AnalysisReportWhereUniqueInput)
  @Field(() => AnalysisReportWhereUniqueInput, { nullable: false })
  where!: AnalysisReportWhereUniqueInput;
}

export { AnalysisReportFindUniqueArgs as AnalysisReportFindUniqueArgs };
