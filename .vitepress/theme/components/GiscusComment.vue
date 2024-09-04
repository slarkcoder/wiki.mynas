<script setup>
import Giscus from '@giscus/vue';
import { useRoute, useData } from 'vitepress';
const route = useRoute();
const { isDark } = useData();
</script>

<template>
    <div style="margin-top: 24px">
        <Giscus
            id="comments"
            repo="slarkcoder/wiki.mynas"
            repoid="R_kgDOLl070Q"
            category="General"
            categoryid="DIC_kwDOLl070c4CiM4_"
            mapping="pathname"
            term="Welcome to giscus!"
            reactionsenabled="1"
            emitmetadata="0"
            inputposition="top"
            lang="zh-CN"
            loading="lazy"
            :theme="isDark ? 'dark' : 'light'"
            :key="route.path"
        ></Giscus>
    </div>
</template>