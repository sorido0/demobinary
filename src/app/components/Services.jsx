import { Cart } from "./Cart"
import aboutChart from 'public/images/aboutChart.png'

export const Services = () => {
    return (

        <div className="flex items-center justify-center flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full m-2">
            <h5 className="m-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Services</h5>

            <div className="grid grid-cols-3 gap-2 w-full items-center justify-center mb-5">
                <div className="flex justify-center items-center">
                    <Cart titulo='Insurance' desc='It does not matter if you are at work time, leave everything in our hands, because we will do all the work for you, WE ARE YOUR INSURER' img={aboutChart} />
                </div>
                <div className="flex justify-center items-center">
                    <Cart titulo='Wealth Management' desc='Wealth management is an investment advisory service that combines other financial services to address the needs of affluent clients.' img={aboutChart} />
                </div><div className="flex justify-center items-center">
                    <Cart titulo='Startup Investment' desc='Our work team, the liberating agents, will be in charge of improving your life. We will start working on your case the right way, Satisfaction Guarantee' img={aboutChart} />
                </div><div className="flex justify-center items-center">
                    <Cart titulo='Risk Analysis' desc='Risk Analysis is a process that helps you identify and manage potential problems that could undermine key business initiatives or projects.' img={aboutChart} />
                </div><div className="flex justify-center items-center">
                    <Cart titulo='VC Funds' desc='Venture capital funds are pooled investment funds that manage the money of investors who seek private equity stakes in startups and small- to medium-sized enterprises with strong growth potential.' img={aboutChart} />
                </div>
                <div className="flex justify-center items-center">
                    <Cart titulo='Business Loans' desc='A loan is when money is given to another party in exchange for repayment of the loan principal amount plus interest. Loan terms are agreed to by each party before any money is advanced.' img={aboutChart} />
                </div>

            </div>
        </div>
    )
}




