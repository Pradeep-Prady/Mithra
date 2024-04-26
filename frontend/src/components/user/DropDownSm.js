import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownSm({ category, handleClose, color }) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={`inline-flex w-full my-2 gap-x-1.5 rounded-md  hover:font-medium  text-${color}  `}
          >
            {category?.category}
            {/* <span className="material-symbols-outlined">expand_more</span> */}
          </Menu.Button>
        </div>
        {category?.subCategories && category?.subCategories?.length > 0 && (
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="  top-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-[#ffc0cbdc   focus:outline-none">
              <div className="py-1">
                {category?.subCategories &&
                  category?.subCategories?.length > 0 &&
                  category?.subCategories?.map((item) => (
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={`/products/${item._id}`}
                          onClick={handleClose}
                          className={classNames(
                            active ? "text-black font-medium " : `text-${color} `,
                            "block px-4 py-2 text-[15px] "
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
              </div>
            </Menu.Items>
          </Transition>
        )}
      </Menu>
    </div>
  );
}
