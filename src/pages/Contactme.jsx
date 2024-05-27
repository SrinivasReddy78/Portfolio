import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contactme = () => {

  const [state, handleSubmit] = useForm("mkndeazb");
  if (state.succeeded) {
    return <p className='w-full h-full flex items-center justify-center text-white text-2xl text-center'>Thanks,<br /> The Form is Submitted Successfully</p>;
  }




  return (
    <>
      <div className="font-space-grotesk w-full h-full px-16 py-12 text-white max-[640px]:p-0 max-[991px]:p-0">
        <div className="flex border border-white w-full h-full max-[640px]:flex-col-reverse overflow-y-auto rounded-md max-[640px]:border-none">
          {/* Form Left side */}
          <div className="left border-r w-1/2 p-2 max-[640px]:w-full">
            <h1 className="text-4xl font-bold text-Green text-center py-2 border-b max-[640px]:border-none w-10/12 mx-auto mb-4 max-[640px]:text-lg">Let’s chat, Reach out to me.</h1>
            <form action="" className='px-6 flex flex-col gap-2' onSubmit={handleSubmit}>
              <div className="name">
                <h1 className="font-medium text-2xl mb-2 max-[640px]:text-lg">Name</h1>
                <input type="text" name='name' className="border border-input-stroke bg-transparent rounded-md py-2 px-3 w-full" placeholder="Ex - Jhon" />
              </div>
              <div className="email">
                <h1 className="font-medium text-2xl mb-2 max-[640px]:text-lg">Email Address</h1>
                <input type="text" name='email' className="border border-input-stroke bg-transparent rounded-md py-2 px-3 w-full" placeholder="Ex - xyz@gmail.com" />
              </div>
              <div className="message">
                <h1 className="font-medium text-2xl mb-2 max-[640px]:text-lg">Message</h1>
                <textarea rows={6} name='message' disabled={state.submitting} className="border border-input-stroke bg-transparent rounded-md py-2 px-3 w-full" placeholder="Leave a message" />
              </div>
              <input type="submit" value="Submit" className='px-4 py-1 mx-auto cursor-pointer hover:bg-Green hover:text-black transition-colors rounded border border-Green w-1/2 text-xl font-semibold' />
            </form>
          </div>

          {/* Form Right Side */}
          <div className="right w-1/2 flex flex-col items-center justify-around px-2 max-[640px]:w-full">
            <div className="">
              <h1 className="text-4xl font-bold text-Green text-center py-2 max-[640px]:text-lg">Let’s Work Together</h1>
              <p className="font-light text-center max-[640px]:text-sm">I am available for freelance, Full-time and Part-time work</p>
            </div>
            <div className="w-10/12 h-[80%]">
              <img src="./images/Form-image.png" alt="" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactme
