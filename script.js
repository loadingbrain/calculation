document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");
    const ageDisplay = document.querySelector(".age-display");
    const displayBg = document.querySelector(".display-bg");
  
    calculateBtn.addEventListener("click", function () {
      const birthday = new Date(document.getElementById("birthday").value);
      const currentDate = new Date(document.getElementById("currentDate").value);
  
      const age = calculateAge(birthday, currentDate);
  
      document.getElementById("age").textContent = formatAge(age);
      ageDisplay.style.display = "block";
      displayBg.style.display = "block";
  
      calculateBtn.style.backgroundColor = "white";
      ageDisplay.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
  
      setTimeout(() => {
        ageDisplay.style.animation = "none";
      }, 1000);
    });
  
    displayBg.addEventListener("click", function () {
      ageDisplay.style.display = "none";
      displayBg.style.display = "none";
    });
  
    function calculateAge(birthday, currentDate) {
      let yearDiff = currentDate.getFullYear() - birthday.getFullYear();
      let monthDiff = currentDate.getMonth() - birthday.getMonth();
      let dayDiff = currentDate.getDate() - birthday.getDate();
      
      if (dayDiff < 0) {
        monthDiff--;
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
        dayDiff = lastMonth.getDate() + dayDiff;
      }
      
      if (monthDiff < 0) {
        yearDiff--;
        monthDiff = 12 + monthDiff;
      }

      return {
        years: yearDiff,
        months: monthDiff,
        days: dayDiff
      };
    }
  
    function formatAge(age) {
      const { years, months, days } = age;
      return `${years} years, ${months} months, and ${days} days`;
    }
});
