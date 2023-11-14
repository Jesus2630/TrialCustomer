this.formOnload = function (executionContext) 
{
    var formContext = executionContext.getFormContext();
    
    

}

this.formOnChange = function (executionContext)
{
    var formContext = executionContext.getFormContext();

    validarPais(formContext);

}

validarPais = function (context){

    var pais  = context.getAttribute("address1_country").getValue();

    if(pais == "Inglaterra" || pais == "Reino Unido"){
        context.getControl("address1_country").setLabel("Código postal")
    }else{
        context.getControl("address1_country").setLabel("Código ZIP")
    }

    if(pais == null){
        context.getControl("address1_country").setLabel("Código ZIP-Postal")
    }



}

