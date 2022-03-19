
		/************************** Append demo ****************************************/
		$(document).ready(function()
		{
			$('button').click(function()
			{
				$(this).after('<div id="r1"><br>Name:<input type="text">&nbsp;&nbsp;Mobile:<input type="text">&nbsp;&nbsp;Email:<input type="text">&nbsp;&nbsp;<a href="#" id="remove1">Remove</a>&nbsp;&nbsp;<button id="add1">Add </button></div>');

				$('#remove1').click(function()
				{
					$('#r1').remove();
				});

				$('#add1').click(function()
			{
				$(this).after('<div id="r2"><br>DOB:<input type="text">&nbsp;&nbsp;Gender:<input type="text">&nbsp;&nbsp;Course:<input type="text">&nbsp;&nbsp;<a href="#" id="remove2">Remove</a>&nbsp;&nbsp;<button id="add2">Add </button></div>');

				$('#remove2').click(function()
				{
					$('#r2').remove();
				});
		
				$('#add2').click(function()
			{
				$(this).after('<div id="r3"><br>addhar no:<input type="text">&nbsp;&nbsp;Pan no:<input type="text">&nbsp;&nbsp;password:<input type="text">&nbsp;&nbsp;<a href="#" id="remove3">Remove</a>&nbsp;&nbsp;<button id="add3">Add </button></div>');

				$('#remove3').click(function()
				{
					$('#r3').remove();
				});

				$('#add3').click(function()
			{
				$(this).after('<div id="r4"><br>city1:<input type="text">&nbsp;&nbsp;city2:<input type="text">&nbsp;&nbsp;address:<input type="text">&nbsp;&nbsp;<a href="#" id="remove4">Remove</a>&nbsp;&nbsp;<button id="submit">Submit </button></div>');

				$('#remove4').click(function()
				{
					$('#r4').remove();
				})

			});



			});



			});


	

			});


		});
	

