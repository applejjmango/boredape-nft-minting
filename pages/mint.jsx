import React, { useEffect, useState } from 'react'
import {
  useConnectWallet,
  useSetChain,
  useWallets,
  web3Onboard
} from '@web3-onboard/react'
import { initOnboard } from '../utils/onboard'

const Mint = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()
  const connectedWallets = useWallets()

  const [paused, setPaused] = useState(false)

  const [isPublicSale, setIsPublicSale] = useState(false)
  const [isPreSale, setIsPreSale] = useState(false)

  const [walletAddress, setWalletAddress] = useState('')

  // Minting status
  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)

  const [onboard, setOnboard] = useState(null)

  useEffect(() => {
    setOnboard(initOnboard)
  }, [])

  useEffect(() => {
    console.log('connectedWallets =>', connectedWallets)
    if (!connectedWallets.length) return

    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    )
    window.localStorage.setItem(
      'connectedWallets',
      JSON.stringify(connectedWalletsLabelArray)
    )
  }, [connectedWallets])

  useEffect(() => {
    console.log('onboard', onboard)
    console.log('wallet => ', wallet)
    if (!onboard) return

    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem('connectedWallets')
    )

    if (previouslyConnectedWallets?.length) {
      async function setWalletFromLocalStorage() {
        await connect({
          autoSelect: {
            label: previouslyConnectedWallets[0],
            disableModals: true
          }
        })
      }

      setWalletFromLocalStorage()
    }
  }, [onboard, connect])

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-brand-background">
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <img
          src="/images/blur.jpeg"
          className="absolute inset-auto block min-h-screen w-full animate-pulse-slow object-cover"
        />
        <div className="flex h-full w-full flex-col items-center justify-center px-2 md:px-10">
          <div className="z-1 flex w-full flex-col items-center rounded-md bg-gray-900/90 py-4 px-2 filter backdrop-blur-sm md:max-w-3xl md:px-10">
            <h1 className="mt-3 bg-gradient-to-br from-brand-green to-brand-blue bg-clip-text font-coiny  text-3xl font-bold uppercase text-transparent md:text-4xl">
              {paused ? 'Paused' : isPreSale ? 'Pre-Sale' : 'Public Sale'}
            </h1>
            <h3 className="text-sm tracking-widest text-pink-200">
              {wallet?.accounts[0]?.address
                ? wallet?.accounts[0]?.address.slice(0, 8) +
                  '.....' +
                  wallet?.accounts[0]?.address.slice(-6)
                : ''}
            </h3>

            <div className="mt-10 flex w-full flex-col md:mt-14 md:flex-row md:space-x-14">
              <div className="relative w-full">
                <div className="absolute top-2 left-2 z-10 flex items-center justify-center rounded-md border border-brand-purple bg-black px-4 py-2 font-coiny text-base font-semibold text-white opacity-80 filter backdrop-blur-lg">
                  <p>
                    <span className="text-brand-pink">0</span> / 2222
                  </p>
                </div>

                <img
                  src="/images/55.png"
                  className="w-full rounded-md object-cover sm:h-[280px] md:w-[250px]"
                />
              </div>
            </div>

            {/* NFT Increment & Decrement */}
            <div className="mt-16 flex w-full flex-col items-center px-4 md:mt-0">
              <div className="flex w-full items-center justify-between font-coiny">
                <button className="flex h-10 w-14 items-center justify-center rounded-md bg-gray-300 font-bold text-brand-background hover:shadow-lg md:h-12 md:w-16">
                  <img
                    className="h-6 w-6 stroke-2 md:h-8 md:w-8"
                    src="asset/PlusLogo.svg"
                    alt=""
                  />
                </button>

                <p className="flex flex-1 grow items-center justify-center text-center text-3xl font-bold text-brand-pink md:text-4xl"></p>

                <button className="flex h-10 w-14 items-center justify-center rounded-md bg-gray-300 font-bold text-brand-background hover:shadow-lg md:h-12 md:w-16">
                  <img
                    className="h-6 w-6 stroke-2 md:h-8 md:w-8"
                    src="asset/MinusLogo.svg"
                    alt=""
                  />
                </button>
              </div>

              <p className="mt-3 text-sm tracking-widest text-pink-200">
                Max Mint Amount: 5
              </p>

              <div className="mt-16 w-full border-t border-b py-4">
                <div className="flex w-full items-center justify-between font-coiny text-xl text-brand-yellow">
                  <p>Total</p>

                  <div className="flex items-center space-x-3">
                    <p>0 ETH</p> <span className="text-gray-400">+ GAS</span>
                  </div>
                </div>
              </div>

              {/* Mint Button && Connect Wallet Button */}
              {wallet ? (
                <button
                  className={` ${
                    paused || isMinting
                      ? 'cursor-not-allowed bg-gray-900'
                      : 'bg-gradient-to-br from-brand-purple to-brand-pink shadow-lg hover:shadow-pink-400/50'
                  } mx-4 mt-12 w-full rounded-md px-6 py-3 font-coiny text-2xl  uppercase tracking-wide text-white`}
                  disabled={paused || isMinting}
                >
                  {isMinting ? 'Minting...' : 'Mint'}
                </button>
              ) : (
                <button
                  className="mx-4 mt-12 w-full rounded-md bg-gradient-to-br from-brand-purple to-brand-pink px-6 py-3 font-coiny text-2xl uppercase tracking-wide text-white shadow-lg hover:shadow-pink-400/50"
                  onClick={() => connect()}
                >
                  Connect Wallet
                </button>
              )}

              {/* Status */}

              <div
                className="border-brand-pink-400 mx-auto 
                 mt-8 h-full w-full rounded-md border px-4 py-4"
              >
                <p className="... flex flex-col space-y-2 break-words text-center text-sm text-white md:text-base">
                  Something went wrong
                </p>
              </div>

              {/* Contract Address */}
              <div className="mt-10 flex w-full flex-col items-center border-t border-gray-800 py-2">
                <h3 className="mt-6 font-coiny text-2xl uppercase text-brand-pink">
                  Contract Address
                </h3>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-gray-400"
                >
                  <span className="... break-all">abc</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mint
