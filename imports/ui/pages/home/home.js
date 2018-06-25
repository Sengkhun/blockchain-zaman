Template.home.events({

    'submit #form_search_student' ( e, t ) {
        e.preventDefault();

        let studentId = $('#student_id').val();
        let publicKey = $('#public_key').val();

        // alert("Student ID: " + studentId + "\n" + "Public Key: " + publicKey);
    }

});
