"use client";

import React, { useMemo } from 'react';

interface Props {
    text: string;
}

const ThaiWordBreaker = ({ text }: Props) => {
    const processedText = useMemo(() => {
        if (typeof Intl === 'undefined' || !Intl.Segmenter) return text;

        const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
        const segments = segmenter.segment(text);

        return Array.from(segments).map((s, index) => (
            <span key={index} className="inline-block whitespace-nowrap">
        {s.segment}
                {/* ถ้า segment เป็นช่องว่าง ไม่ต้องใส่อะไรเพิ่ม */}
                {s.segment === ' ' ? '\u00A0' : ''}
      </span>
        ));
    }, [text]);

    return <span className="inline">{processedText}</span>;
};

export const ThaiWordBreakerWBR = ({ text }: Props) => {
    const processedText = useMemo(() => {
        if (typeof Intl === 'undefined' || !Intl.Segmenter) {
            return text;
        }

        const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
        const segments = segmenter.segment(text);

        return Array.from(segments).map((s, index) => (
            <React.Fragment key={index}>
                {s.segment}
                <wbr />
            </React.Fragment>
        ));
    }, [text]);

    return <>{processedText}</>;
};

export default ThaiWordBreaker;