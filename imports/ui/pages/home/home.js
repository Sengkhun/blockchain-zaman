Template.home.events({

    'submit #form_search_student' ( e, t ) {
        e.preventDefault();

        let studentId = $('#student_id').val();
        let publicKey = $('#public_key').val();
        let image = $('#image').prop('files');
        alert(image);

        // alert("Student ID: " + studentId + "\n" + "Public Key: " + publicKey);
    }

});
