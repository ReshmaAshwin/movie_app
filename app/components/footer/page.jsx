const Footer = () => {
    return (
      <div className="bg-black text-white pt-8 mt-auto">
        <div className="container mx-auto px-6 ">
          <div className="flex justify-between md:flex-row flex-col  pb-8 ">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="mb-2">123 Main St.</p>
              <p className="mb-2">City, State 12345</p>
              <p>Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
              <p>Phone: (123) 456-7890</p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
  
        <div className="bg-gray-800 pt-4 text-center">
          <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  