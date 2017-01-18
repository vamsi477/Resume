/**
 * Created by vamsikrishnachanna on 10/17/16.
 */

function validateForm()
{
if(document.Messageform.Name.value =="")
{
    alert("Please provide your Name");
}
else
{
    return false;
}
if(document.Messageform.Email.value="")
{
    alert("Please provide your Email");
}
else
{
    return false;
}
if(document.Messageform.Message.value="")
{
    alert("Please write your message");
}
}