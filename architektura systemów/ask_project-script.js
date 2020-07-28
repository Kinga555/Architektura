function mov()
{
    /*---------------------pobieram element gdzie bedzie wyswietlana infromacja o przeslaniu---------------------*/
    var wynik1 = document.getElementById("wynik");

    /*---------------------pobieram informacje o polu z ktorego ma byc przeslana wartosc ---------------------*/
    var rejestrpoczatkowy = document.getElementById("rejestr_zrodlowy").value;

    /*---------------------pobieram elementy z listy wyboru rejestru docelowego---------------------*/
    var rejestrdocelowy = document.getElementById("rejestr_docelowy").value;


    /*---------------------przesylanie z rejestru AX------------------------------------------------*/
    if(rejestrpoczatkowy == "AX" && rejestrdocelowy == "BX")
    {
        var ax = document.getElementById("ax").value;
        var bx = document.getElementById("bx").value;
        bx=ax;
            wynik1.innerHTML = "<p> Przesyłano wartość " +ax+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
        document.form.BX.value=bx;
    }
    else
    {
        if(rejestrpoczatkowy == "AX" && rejestrdocelowy == "CX")
        {
            var ax = document.getElementById("ax").value;
            var cx = document.getElementById("cx").value;
            cx=ax;
            wynik1.innerHTML = "<p> Przesyłano wartość " +ax+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
            document.form.CX.value=cx;
        }
        else
        {
            if(rejestrpoczatkowy == "AX" && rejestrdocelowy == "DX")
            {
                var ax = document.getElementById("ax").value;
                var dx = document.getElementById("dx").value;
                dx=ax;
            wynik1.innerHTML = "<p> Przesyłano wartość " +ax+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
                document.form.DX.value=dx;
            }
        }



        /*---------------------przesylanie z rejestru BX------------------------------------------------*/
        if(rejestrpoczatkowy == "BX" && rejestrdocelowy == "AX")
        {
            var bx = document.getElementById("bx").value;
            var ax = document.getElementById("ax").value;
            ax=bx;
            wynik1.innerHTML = "<p> Przesyłano wartość " +bx+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
            document.form.AX.value=ax;
        }
        else
        {
            if(rejestrpoczatkowy == "BX" && rejestrdocelowy == "CX")
            {
                var bx = document.getElementById("bx").value;
                var cx = document.getElementById("cx").value;
                cx=bx;
            wynik1.innerHTML = "<p> Przesyłano wartość " +bx+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
                document.form.CX.value=cx;
            }
            else
            {
                if(rejestrpoczatkowy == "BX" && rejestrdocelowy == "DX")
                {
                    var bx = document.getElementById("bx").value;
                    var dx = document.getElementById("dx").value;
                    dx=bx;
            wynik1.innerHTML = "<p> Przesyłano wartość " +bx+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
                    document.form.DX.value=dx;
                }
            }

        }




        /*---------------------przesylanie z rejestru CX------------------------------------------------*/
        if(rejestrpoczatkowy == "CX" && rejestrdocelowy == "AX")
        {
            var cx = document.getElementById("cx").value;
            var ax = document.getElementById("ax").value;
            ax=cx;
            wynik1.innerHTML = "<p> Przesyłano wartość " +cx+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
            document.form.AX.value=ax;
        }
        else
        {
            if(rejestrpoczatkowy == "CX" && rejestrdocelowy == "BX")
            {
                var cx = document.getElementById("cx").value;
                var bx = document.getElementById("bx").value;
                bx=cx;
            wynik1.innerHTML = "<p> Przesyłano wartość " +cx+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
                document.form.BX.value=bx;
            }
            else
            {
                if(rejestrpoczatkowy == "CX" && rejestrdocelowy == "DX")
                {
                    var cx = document.getElementById("cx").value;
                    var dx = document.getElementById("dx").value;
                    dx=cx;
            wynik1.innerHTML = "<p> Przesyłano wartość " +cx+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
                    document.form.DX.value=dx;
                }
            }
        }




        /*---------------------przesylanie z rejestru DX------------------------------------------------*/
        if(rejestrpoczatkowy == "DX" && rejestrdocelowy == "AX")
        {
            var dx = document.getElementById("dx").value;
            var ax = document.getElementById("ax").value;
            ax=dx;
            wynik1.innerHTML = "<p> Przesyłano wartość " +dx+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
            document.form.AX.value=ax;
        }
        else
        {
            if(rejestrpoczatkowy == "DX" && rejestrdocelowy == "BX")
            {
                var dx = document.getElementById("dx").value;
                var bx = document.getElementById("bx").value;
                bx=dx;
            wynik1.innerHTML = "<p> Przesyłano wartość " +dx+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
                document.form.BX.value=bx;
            }
            else
            {
                if(rejestrpoczatkowy == "DX" && rejestrdocelowy == "CX")
                {
                    var cx = document.getElementById("cx").value;
                    var dx = document.getElementById("dx").value;
                    cx=dx;
            wynik1.innerHTML = "<p> Przesyłano wartość " +dx+ " z rejestru "+rejestrpoczatkowy+" do rejestru "+rejestrdocelowy +"</p>";
                    document.form.CX.value=cx;
                }
            }
        }


    }




}
