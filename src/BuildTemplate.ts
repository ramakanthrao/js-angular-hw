

export const BuildTemplate = function(templateString, templateVars){
    templateString = templateString.replace(/{{/g, "${this.").replace(/}}/g, "}") ;
    return new Function("return `"+templateString+"`;").call(templateVars);
  }
