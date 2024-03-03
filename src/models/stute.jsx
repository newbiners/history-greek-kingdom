/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: misterdevious (https://sketchfab.com/misterdevious)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/cemetery-angel-miller-3b7e4e4a84f94f0d876e21e853eb8db8
Title: cemetery Angel - Miller
*/

import React, { useRef, useEffect, useState } from "react";
import gsap from 'gsap'
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import StuteScane from "../assets/3d/stute.glb"
const Stute = ({positionCursor, ...props}) => {
    // const [isClick, setIsClick] = useState(1)
    const [oldPos, setOldPos] = useState({
        x: "",
        y: "",
        z: ""
    })

    const [oldRot, setOldRot] = useState({
        x: "",
        y: "",
        z: ""
    })
    const { camera } = useThree();

    useEffect(() => {
        setOldPos({
            x: camera.position.x,
            y: camera.position.y,
            z: camera.position.z
        })
        setOldRot({
            x: camera.rotation.x,
            y: camera.rotation.y,
            z: camera.rotation.z
        })

    }, [])
    // console.log(oldPos, "oll")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const handlePointerMove = (e) => {
    //     // e.stopPropagation()
    //     e.preventDefault()
    //     if (isClick > 3) {
    //         setIsClick(1)
    //     } else {
    //         setIsClick((prev) => prev + 1)
    //     }
    //     console.log(isClick, "is ckik")
    // }

    // useEffect(() => {
    //     const canvas = gl.domElement;
    //     // canvas.addEventListener("pointerdown", handlePointerDown);
    //     canvas.addEventListener("pointerup", handlePointerMove);
    //     return () => {
    //         // canvas.removeEventListener("pointerdown", handlePointerDown);
    //         canvas.removeEventListener("pointerup", handlePointerMove);
    //     };
    // }, [gl, handlePointerMove])

    useFrame((state, delta) => {
        //  const time = clock.getElapsedTime()
        if (positionCursor == 4) {
            gsap.to(camera.position, {
                x: 0,
                y: 0.7,
                z: 1.5,
                duration: 0.5
            });
            gsap.to(camera.rotation, {
                x: oldRot.x,
                y: -0.5,
                z: oldRot.z,
                duration: 0.5
            });
        }
        if (positionCursor == 3) {
            gsap.to(camera.position, {
                x: -3,
                y: 0.4,
                z: 2,
                duration: 0.5
            });
            gsap.to(camera.rotation, {
                x: oldRot.x,
                y: -0.5,
                z: oldRot.z,
                duration: 0.5
            });
        }
        if (positionCursor == 2) {
            gsap.to(camera.position, {
                x: 0,
                y: 3.2,
                z: 0,
                duration: 0.5
            });
            gsap.to(camera.rotation, {
                x: -1.4,
                y: oldRot.y,
                z: oldRot.z,
                duration: 0.5
            });
        }
        if (positionCursor == 1) {
            gsap.to(camera.position, {
                x: oldPos.x,
                y: oldPos.y,
                z: oldPos.z,
                duration: 0.5
            });
            gsap.to(camera.rotation, {
                x: oldRot.x,
                y: oldRot.y,
                z: oldRot.z,
                duration: 0.5
            })
        }
    });

    const { nodes, materials } = useGLTF(StuteScane);

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={1.05}>
                <mesh
                    geometry={nodes.angel001_0.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_1.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_2.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_3.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_4.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_5.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_6.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_7.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_8.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_9.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_10.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_11.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_12.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_13.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
                <mesh
                    geometry={nodes.angel001_0_14.geometry}
                    material={materials["angel.Miller.RC.normal.4kt_Material_u1_v1"]}
                />
            </group>
        </group>
    );
}

export default Stute;