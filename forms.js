
$(document).ready(function() {
    var valuesArray = [];
    var totalMonthlySal = 0;

    //function on clicking submit button
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      var values = {};
      $.each($('#employeeinfo').serializeArray(), function(i, field) {
        values[field.name] = field.value;
      })

      //push salary from values object to valuesArray
      valuesArray.push(parseInt(values.employeeannualsalary));
      console.log(values);
      console.log(valuesArray);
      
      $('#employeeinfo').find('input[type=text]').val('');

      appendDom(values);
    });

    //append to DOM
    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();


      $el.append('<p>' + 'Employee Name: ' + empInfo.employeefirstname + ' ' +
        empInfo.employeelastname + '</p>');
      $el.append('<p>' + 'Employee ID: ' + empInfo.employeeid + '</p>');
      $el.append('<p>' + 'Title: ' + empInfo.employeejobtitle + '</p>');
      $el.append('<p>' + 'Salary: $' + empInfo.employeeannualsalary + '</p>');

      //update total monthly salary by calling calcTotalMonSal function
      $('#totalsalaries').find('span').text(' $' + Math.round(calcTotalMonSal(valuesArray)));

      //create and append delete button
      $el.append('<div class="deleteEmp"><button>Remove Employee</button></div>');
      $('#container .deleteEmp').css({'marginBottom': '30px', 'width': '100px',
        'marginLeft': 'auto', 'marginRight': 'auto'});
    }

    //calculate total monthly salary by looping through salArray
    function calcTotalMonSal (salArray) {
      var totalSalary = 0;
      for (i = 0; i < salArray.length; i++) {
        totalSalary += salArray[i]/12;
      }
      return totalSalary;

    }

    //remove employee
    $('#container').on('click', 'button', function() {
      $('#container .deleteEmp').closest('.person').remove();

    });








});
