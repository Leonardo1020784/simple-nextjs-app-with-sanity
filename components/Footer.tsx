import React from 'react'
import Footerlegal from './Footerlegal'

function Footer() {
  return (
    <>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg fill="#000000" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442 442"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M231.5,50.5c0-5.79-4.71-10.5-10.5-10.5c-5.79,0-10.5,4.71-10.5,10.5S215.21,61,221,61C226.79,61,231.5,56.29,231.5,50.5z"></path> <path d="M286,167.358V122c0-5.522-4.477-10-10-10h-10V10c0-5.523-4.477-10-10-10h-70c-5.523,0-10,4.477-10,10v102h-10 c-5.523,0-10,4.478-10,10v45.358C107.188,191.859,76,242.045,76,297c0,79.953,65.047,145,145,145s145-65.047,145-145 C366,242.045,334.811,191.859,286,167.358z M196,20h50v92h-50V20z M221,422c-68.925,0-125-56.075-125-125 c0-49.266,29.078-94.087,74.079-114.188c3.602-1.609,5.921-5.186,5.921-9.131V132h35v115h-76.155c-3.887,0-7.421,2.252-9.063,5.774 C119.291,266.697,116,281.577,116,297c0,57.897,47.103,105,105,105c21.604,0,42.37-6.538,60.054-18.908 c17.269-12.078,30.39-28.809,37.945-48.383c1.989-5.152-0.576-10.941-5.728-12.93c-5.153-1.989-10.942,0.575-12.93,5.729 C287.76,360.102,255.875,382,221,382c-46.869,0-85-38.131-85-85c0-10.371,1.837-20.435,5.469-30H211v85c0,5.522,4.477,10,10,10 c5.523,0,10-4.478,10-10v-85h69.531c3.632,9.565,5.469,19.629,5.469,30c0,5.522,4.477,10,10,10c5.523,0,10-4.478,10-10 c0-15.423-3.291-30.303-9.781-44.226c-1.642-3.522-5.177-5.774-9.063-5.774H231V132h35v41.682c0,3.945,2.319,7.521,5.921,9.131 C316.922,202.913,346,247.734,346,297C346,365.925,289.925,422,221,422z"></path> </g> </g></svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Regalos Para Mamá
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
            Compañía Colombiana de productos de mamá que se dedica a crear experiencias memorables y emocionantes.
            </p>
            <p className="mt-4 text-sm text-gray-800">
            Tu esencia, nuestra pasión
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Telefono:</p>
          <p>+ 57 320 252 94 27</p>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Direccion:</p>
            <p>Calle 165a 8g-18 Bgt</p>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a> 
          </div>
          <p className="mt-4 text-sm text-gray-500">
          Creemos en la importancia de los detalles y la elegancia, por lo que cada fragancia refleja nuestro compromiso con la sofisticación y el estilo.
          </p>
        </div>
      </div>
      <Footerlegal />
    </div>
    </>
  )
}

export default Footer
