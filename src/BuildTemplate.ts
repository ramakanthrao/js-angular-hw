

export const BuildTemplate = function(templateString:string, templateVars:any){
    templateString = templateString.replace(/{{/g, "${this.").replace(/}}/g, "}") ;
    return new Function("return `"+templateString+"`;").call(templateVars);
  }
