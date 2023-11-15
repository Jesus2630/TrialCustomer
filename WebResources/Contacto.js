this.formOnload = function (executionContext) 
{

}

this.formOnSave = function (executionContext){
    var formContext = executionContext.getFormContext();

    if(!validarSocio(formContext)){
        executionContext.getEventArgs().preventDefault();
    }
}


this.validarSocio = function (formContext)
{
    var socio = formContext.getAttribute("pb_socio").getValue();
    var credencial = formContext.getAttribute("pb_credencial").getValue();

    if(socio && credencial == null) 
    {

        formContext.getControl("pb_credencial").setNotification("Debe ingresar una credencial", "credencial");
        formContext.getControl("pb_credencial").setFocus();

        setTimeout(function() {
            formContext.getControl("pb_credencial").clearNotification("credencial");
        }, 3000);

        //Prueba
        return false;
    }

    return true;
}

