import { Crown } from "lucide-react"

export default function Component() {
    return (
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-16 min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full min-w-3xl bg-[#252641] text-white rounded-3xl overflow-hidden relative">
                <div className="p-8 md:p-12 flex flex-col items-center text-center space-y-6">
                    <Crown className="w-16 h-16 text-yellow-400 absolute top-4 right-4" />
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                        Devenez Membre de Notre Club Informatique et Bénéficiez d'Avantages Exclusifs !
                    </h1>
                    <p className="text-lg md:text-xl max-w-6xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                    <button className="bg-[#49BBBD] hover:bg-[#3da7a9] text-white font-bold py-3 px-6 rounded-lg text-lg">
                        Obtenez Votre Carte de Membre
                    </button>
                </div>
            </div>
        </div>
    )
}