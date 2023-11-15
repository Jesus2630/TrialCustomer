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


Displayed = function(primaryControl)
{
    var formContext = primaryControl;
    Xrm.Navigation.openAlertDialog({ 
        text: "Hay un registro duplicado",
        confirmButtonLabel: "Ok",
        title: formContext.getAttribute("name").getValue()
    }).then(function(success) {
        Xrm.Navigation.openConfirmDialog(
            {
                text: "Texto de confirmación",
            }
        );  
    });
    //Xrm.Navigation.openErrorDialog({ message: "Error" });
}