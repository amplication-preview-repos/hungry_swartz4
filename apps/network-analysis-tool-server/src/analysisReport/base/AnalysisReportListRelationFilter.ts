/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalysisReportWhereInput } from "./AnalysisReportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AnalysisReportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AnalysisReportWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisReportWhereInput)
  @IsOptional()
  @Field(() => AnalysisReportWhereInput, {
    nullable: true,
  })
  every?: AnalysisReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalysisReportWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisReportWhereInput)
  @IsOptional()
  @Field(() => AnalysisReportWhereInput, {
    nullable: true,
  })
  some?: AnalysisReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalysisReportWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisReportWhereInput)
  @IsOptional()
  @Field(() => AnalysisReportWhereInput, {
    nullable: true,
  })
  none?: AnalysisReportWhereInput;
}
export { AnalysisReportListRelationFilter as AnalysisReportListRelationFilter };
