import React from 'react';
import { Knob } from 'primereact/knob';

export default function CustomKnob({ value, color } : React.PropsWithChildren<{ value: number; color: string }>) {

    return (
        <div className="card flex justify-content-center static md:absolute top-72 right-3 lg:right-48">
            <Knob value={value} valueTemplate={"{value}%"} size={200} textColor={color} rangeColor="gray" valueColor={color} />
        </div>
    )
}