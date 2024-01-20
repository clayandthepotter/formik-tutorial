import * as yup from 'yup';

const passwordRules =
	/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const basicSchema = yup.object().shape({
	email: yup
		.string()
		.min(5)
		.matches(emailRules, 'Not a valid email')
		.email('Please enter a valid email')
		.required('This field is required'),
	age: yup
		.number()
		.positive()
		.max(120, 'Invalid age')
		.integer()
		.required('This field is required'),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.matches(
			passwordRules,
			'Requirements: Minimum 8 characters, 1 upper case, 1 lower case, 1 digit, 1 special character.'
		)
		.required('This field is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('This field is required'),
});
