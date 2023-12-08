import { FaArrowRight, FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import moment from 'moment';

const Footer = () => {
  return (
    <>
      <div className="bg-[#9EC8B9] w-full rounded-t-3xl pt-5 h-full">
        {/* last part of the footer */}

        <div className="flex w-full justify-around">
            <div className="w-1/4">
                <h2 className="mb-6">lorem</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est accusamus numquam officiis explicabo nobis sunt eum reprehenderit? Obcaecati, eaque repellat.</p>
            </div>
            <div className="w-1/4">
                <div className="mb-6">
                <h2>lorem</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dolor.</p>
                <p className="mb-4">Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum.</p>
            </div>
            <div >
                <div className="mb-6">
                <h2>links</h2>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                </ul>
            </div>
            <div >
               <div className="mb-6">
               <h2>news latter</h2>
               </div>
                <div className="flex border-b-2 border-[#1B4242] items-center ">
                    <FaEnvelope></FaEnvelope>
                    <input className="bg-transparent ps-5 text-black h-10" placeholder="Inter your email" type="email" />
                    <FaArrowRight className=""></FaArrowRight>
                </div>
                <div className="flex mt-8 justify-start gap-10">
                    <FaFacebook className=""></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaLinkedin></FaLinkedin>
                    <FaGithub></FaGithub>
                </div>
            </div>
        </div>

        <div className="footer footer-center p-4 bg-[#1b42429a] text-white">
          <aside>
            <p>Copyright © {moment().format("Y")}- All right reserved by ACME Industries Ltd</p>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Footer;
