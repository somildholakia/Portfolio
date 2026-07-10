import { motion } from "framer-motion";

export default function Background() {

    return (

        <div className="fixed inset-0 -z-10 overflow-hidden">

            <motion.div

                animate={{
                    x:[0,120,0],
                    y:[0,-80,0]
                }}

                transition={{
                    repeat:Infinity,
                    duration:18
                }}

                className="absolute w-[600px] h-[600px]
                bg-violet-600/20 rounded-full
                blur-[170px]
                -top-44
                -left-48"

            />

            <motion.div

                animate={{
                    x:[0,-120,0],
                    y:[0,80,0]
                }}

                transition={{
                    repeat:Infinity,
                    duration:22
                }}

                className="absolute w-[550px] h-[550px]
                bg-cyan-500/20 rounded-full
                blur-[170px]
                bottom-0
                right-0"

            />

        </div>

    );

}