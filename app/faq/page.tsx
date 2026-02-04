"use client";

export default function Register() {
    return (
      <>
      <div className="flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center w-full items-center pt-16 pb-10 mb-10'>
            <p className='text-8xl mb-4'>FAQ</p><p className='text-neutral-700'>Frequently Asked Question</p>
        </div>
        <div className="flex flex-col  w-5/6 bg-[#EB8B51] px-6">
        {/* 1 ก้อน */}
            <details className='group block w-full bg-[#EB8B51] items-center'>
                <summary className='w-full list-none flex justify-between items-center p-6'><p>12345</p><div className='size-0 border-solidh-0 w-0 
            border-l-[9px] border-r-[9px] border-b-[15.6px] 
            border-l-transparent border-r-transparent border-b-[#FFDB4A] 
            rotate-180 transition-transform duration-500 group-open:rotate-0'></div></summary>
            <div className='grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-open:grid-rows-[1fr]'>
                <div className='overflow-hidden'>
                    <div className='bg-[#C86A2D] p-6 text-white w-full'>
                        <div className=''>bcdefg</div>
                </div>
                </div>
                
            </div>
            
            </details>
            <div className='h-0.5 w-11/12 bg-gray-950'></div>
            <details className='group block w-full bg-[#EB8B51] items-center'>
                <summary className='w-full list-none flex justify-between items-center p-6'><p>12345</p><div className='size-0 border-solidh-0 w-0 
            border-l-[9px] border-r-[9px] border-b-[15.6px] 
            border-l-transparent border-r-transparent border-b-[#FFDB4A] 
            rotate-180'></div></summary>
            <div className='bg-[#C86A2D] p-6 text-white w-full'>abcdefg</div>
            </details>
            

        </div>
      </div>
        
    </>
    );
}