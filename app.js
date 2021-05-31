    let good = document.getElementById('good');

    let cheap = document.getElementById('cheap');
    
    let fast = document.getElementById('fast');

    function check_good() {
        if (fast.checked == true && cheap.checked == true) {
            fast.checked = false;
        }
    }

    function check_cheap() {
        if (fast.checked == true && good.checked == true) {
            good.checked = false;
        }
    }
  
      function check_fast() {
        if (good.checked == true && cheap.checked == true) {
            cheap.checked = false;
        }
    }