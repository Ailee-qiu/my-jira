import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const mockRequest = axios.create({
	baseURL: 'mock',
	timeout: 5000,
})
