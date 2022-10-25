jQuery(document).ready(function($) {
    // "$"符号在这里才能被识别
    var activeFlag = {
        "AU": "Australia",
        "AR": "Argentina",
        "BR": "Brazil",
        "CA": "Canada",
        "CN": "China",
        "FR": "France",
        "DE": "Germany",
        //"GR": "Greece",
        "IN": "India",
        //"IE": "Ireland",
       // "IL": "Israel",
        "IT": "Italy",
        "JP": "Japan",
        "KR": "Korea",
        "MX": "Mexico",
        //"NP": "Nepal",
        //"NL": "Netherlands",
        "NZ": "New Zealand",
        //"NO": "Norway",
        //"PK": "Pakistan",
        //"PH": "Philippines",
        //"PT": "Portugal",
        //"RU": "Russian Federation",
        "ZA": "South Africa",
        //"ES": "Spain",
        "CH": "Switzerland",
        "TR": "Turkey",
       // "GB": "United Kingdom",
        "US": "United States",
    }
    function getJson() {
        $.ajax({
            url: "https://flagcdn.com/en/codes.json",
            type: "get",
            dataType: "json",
            success: function (data) {
                console.log(data);
                $.each(data, function (i) {
                    if (i.toUpperCase() in activeFlag) {
                        $(".imgList").append('<li><a href="#"> <img onmouseover="logoChange(this)" onmouseout="logoChangeback()" id = "' + i.toLowerCase() + '" src="https://flagcdn.com/w2560/' + i + '.png" /> </a></li>')
                        //     $('.'+i+'').click(function(){
                        //     $(".top").attr("src","https://flagcdn.com/w2560/"  + i + ".png");
                        // });
    
                    } else {
                        $(".imgList").append('<li><a href="#" style=" filter: gray;   -webkit-filter:grayscale(100%); /* Chrome 19+ & Safari 6+ */ -webkit-transition: all .6s ease;/* Fade to color for Chrome and Safari */-webkit-backface-visibility: hidden;/* Fix for transition flickering */"> <img id = "' + i.toLowerCase() + '"  src="https://flagcdn.com/w2560/' + i + '.png" /> </a></li>')
    
                    }
    
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            },
        })
    }
    function logoChange(obj) {
        //alert(obj.id)
        $("#heading_img").attr("src",'images/logo_images/CapitalAnalystLogo2_' + obj.id + '.png')
    }
    function logoChangeback(){
        $("#heading_img").attr("src",'images/logo_images/CapitalAnalystLogo2.png')
    }
    
    getJson();
    });




