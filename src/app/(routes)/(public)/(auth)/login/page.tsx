import React from "react"


type input = { name: string, label: string, placeHolder: string }

const inputForms = [{ name: "First name", label: "First name", placeHolder: "Firstname" },
{ name: "Last name", label: "Last name", placeHolder: "Last name" },
{ name: "Password", label: "Password", placeHolder: "Password" },
{ name: "Email", label: "Email", placeHolder: "Email" },
]

export default function loginPage() {

    const inputForms = [{ name: "First name", label: "First name", placeHolder: "Firstname" },
    { name: "Last name", label: "Last name", placeHolder: "Last name" },
    { name: "Password", label: "Password", placeHolder: "Password" },
    { name: "Email", label: "Email", placeHolder: "Email" },
    ]

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">

                    <div className="w-full">

                        <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                            {inputForms.map((formItem) => (
                                <div key={formItem.name}> {/* Add a key for each item */}
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        {formItem.label}
                                    </label>
                                    <input
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        placeholder={formItem.placeHolder}
                                        type="text"
                                    />
                                </div>
                            ))}

                            {
                                inputForms.map((formItem2) => (
                                    <div key={formItem2.name}>
                                        {formItem2.label}
                                    </div>
                                ))
                            }
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
