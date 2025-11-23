'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const DUMMY_FILES = [
    {
        id: 1,
        name: 'portfolio.doc',
        image: '/fileicons/DOC.svg',
        url: '/portfolio'
    },
    {
        id: 2,
        name: 'rules.txt',
        image: '/fileicons/TXT.svg',
        url: '/rules'
    },
];

const FolderIcon = () => (
    <Image src="/folder.svg" alt="Folder Icon" width={64} height={64} className="w-full h-full" />
);

type FileIconProps = {
    size: number;
    image: string;
};

const FileIcon = ({ size, image }: FileIconProps) => (
    <Image src={image} alt="File Icon" width={size} height={size} />
);

const Folder = ({ folderName = 'TDC' }: { folderName?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const playSound = () => {
        const audio = new Audio('/click.mp3');
        audio.play();
    };

    return (
        <div className="flex items-center justify-center flex-col">
            <motion.div
                initial={{
                    filter: 'blur(10px)',
                    width: '50px',
                    height: '50px'
                }}
                animate={{
                    height: isOpen ? '210px' : '50px',
                    width: isOpen ? '350px' : '64px',
                    backgroundColor: isOpen ? '#f1f1f1' : '#1BA3F8',
                    borderRadius: isOpen ? '10px' : '10px',
                    cursor: isOpen ? 'default' : 'pointer',
                    filter: 'blur(0px)',
                    boxShadow: isOpen ? '0px 5px 10px 0 rgba(0, 0, 0, 0.1)' : 'none'
                }}
                whileHover={{
                    boxShadow: !isOpen
                        ? '0px 3px 10px 0 rgba(0, 0, 0, 0.25)'
                        : '0px 5px 10px 0 rgba(0, 0, 0, 0.1)',
                    rotateZ: !isOpen ? '-4deg' : '0deg',
                    translateY: !isOpen ? '-3px' : '0px'
                }}
                whileTap={{
                    boxShadow: !isOpen
                        ? '0px 0px 0px 0 rgba(0, 0, 0, 0.25)'
                        : '0px 5px 10px 0 rgba(0, 0, 0, 0.1)',
                    translateY: !isOpen ? '0px' : '0px',
                    rotateZ: !isOpen ? '-2deg' : '0deg',
                    scale: !isOpen ? 0.95 : 1
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25
                }}
                onClick={() => {
                    if (!isOpen) {
                        setIsOpen(true);
                        playSound();
                    }
                }}
                className="overflow-hidden"
            >
                <AnimatePresence mode="popLayout">
                    {!isOpen && (
                        <motion.div
                            initial={{
                                filter: 'blur(10px)',
                                opacity: 0
                            }}
                            animate={{
                                filter: 'blur(0px)',
                                opacity: 1
                            }}
                            exit={{
                                filter: 'blur(10px)',
                                opacity: 0
                            }}
                            whileHover={{
                                translateY: '3px',
                                rotateZ: '4deg'
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            <FolderIcon />
                        </motion.div>
                    )}

                    {isOpen && (
                        <motion.div
                            initial={{
                                filter: 'blur(10px)',
                                opacity: 0
                            }}
                            animate={{
                                filter: 'blur(0px)',
                                opacity: 1
                            }}
                            exit={{
                                filter: 'blur(10px)',
                                opacity: 0
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30
                            }}
                            className="h-full w-full flex flex-col overflow-hidden relative"
                        >
                            {/* folder container header */}
                            <div className="h-7 w-full bg-white flex items-center justify-between">
                                <div className="bg-[#f1f1f1] h-full flex items-center justify-center">
                                    <motion.p
                                        layout="position"
                                        layoutId="folder-name"
                                        className="text-black font-medium px-2 text-sm whitespace-nowrap truncate"
                                    >
                                        {folderName}
                                    </motion.p>
                                </div>
                                <div className="flex-1 flex items-center justify-end px-1 h-full rounded-bl-lg">
                                    <button
                                        onClick={() => {
                                            setIsOpen(false);
                                            playSound();
                                        }}
                                        className="hover:bg-black/10 rounded-full cursor-pointer p-0.5"
                                    >
                                        <X className="text-black" size={14} />
                                    </button>
                                </div>
                            </div>
                            <div className="rounded-b-lg h-full w-full flex items-start justify-start">
                                <div
                                    style={{
                                        gridTemplateColumns: 'repeat(4, 50px)'
                                    }}
                                    className="grid items-start justify-start gap-x-2 gap-y-4 overflow-y-scroll w-full p-2 py-4"
                                >
                                    {DUMMY_FILES.map((file: any, index) => (
                                        <motion.div
                                            onClick={() => {
                                                playSound();
                                                if (file.url) {
                                                    router.push(file.url);
                                                }
                                            }}
                                            key={'folder-item' + folderName + index}
                                            initial={{
                                                opacity: 0
                                            }}
                                            animate={{
                                                opacity: 1
                                            }}
                                            exit={{
                                                opacity: 0
                                            }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 30
                                            }}
                                            className="w-[50px] h-[54px] gap-2 flex flex-col items-center justify-start overflow-hidden"
                                        >
                                            <FileIcon size={30} image={file.image} />
                                            <p className="text-xs text-black truncate text-left w-full">{file.name}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            {!isOpen && (
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30
                    }}
                    layoutId="folder-name"
                    className="text-white font-medium text-sm whitespace-nowrap truncate"
                >
                    {folderName}
                </motion.div>
            )}
        </div>
    );
};

export default Folder;
