//vong lap while long nhau
let sout, i, j;
sout="<table border='1' width='300' cellpadding='3' cellspacing='0'>";
i=j=1;
while (i<=10){
    sout+="<tr>";
    while(j<=10){
        sout+="<td>"+i*j+"</td>";
        j++;
    }
    sout=sout+"</tr>";
    j=1;
    i++;
}
sout=sout+"</table>";
document.write(sout);