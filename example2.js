let marksSecured = 41


if(marksSecured < 50){
    console.log("Your Grade is F");
}else if(marksSecured > 50 && marksSecured < 70){
    console.log("Your Grade is C");
}else if(marksSecured > 70 && marksSecured <90){
    console.log("Your Grade is B");
}else if(marksSecured >90){
    console.log("Your Grade is A");
}else{
    console.log("The marks should be in between 0 and 100 ");
}