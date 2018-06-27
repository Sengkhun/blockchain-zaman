import dateformat from 'dateformat';

Template.home.events({

    'submit #form_search_student' ( e, t ) {
        e.preventDefault();

        let studentId = $('#student_id').val();
        let publicKey = $('#public_key').val();

        Meteor.call('block.find', studentId, publicKey, function(err, res) {

            const { ok, student, error } = res;

            if ( ok ) {

                $('.no-result').addClass('display-off');
                $('.student-container').removeClass('display-off');

                const { imageProfile, firstName, lastName, dateOfBirth, gender, graduatedYear } = student;

                $('#image').attr( 'src', imageProfile );
                $('#id').html( studentId );
                $('#name').html( firstName + lastName );
                $('#gender').html( gender );
                $('#dateOfBirth').html( dateformat( dateOfBirth, "mmmm dS, yyyy" ) );
                $('#graduatedYear').html( graduatedYear );

            } else {

                $('.no-result').removeClass('display-off');
                $('.student-container').addClass('display-off');

                $('.no-result .description').text(error);
            }

        });

    }

});
