import { createApp, h } from 'vue';

const Tooltip = {
    install(app) {
        app.directive('tooltip', {
            mounted(el, binding) {

                let tooltipElement;
                const offset = 10; // Adjust this value for spacing between the element and the tooltip

                const createTooltip = () => {
                    if (tooltipElement) return;

                    tooltipElement = createApp({
                        render() {
                            return h('div', { class: 'tooltip' }, binding.value.text);
                        }
                    }).mount(document.createElement('div')).$el;

                    document.body.appendChild(tooltipElement);
                    positionTooltip();
                };

                const positionTooltip = () => {
                    if (!tooltipElement) return;

                    const rect = el.getBoundingClientRect();
                    const tooltipRect = tooltipElement.getBoundingClientRect();
                    const placement = binding.value.placement || 'top';

                    let top, left;

                    switch (placement) {
                        case 'top':
                            top = rect.top + window.scrollY - tooltipRect.height - offset;
                            left = rect.left + window.scrollX + (rect.width - tooltipRect.width) / 2;
                            break;
                        case 'bottom':
                            top = rect.bottom + window.scrollY + offset;
                            left = rect.left + window.scrollX + (rect.width - tooltipRect.width) / 2;
                            break;
                        case 'left':
                            top = rect.top + window.scrollY + (rect.height - tooltipRect.height) / 2;
                            left = rect.left + window.scrollX - tooltipRect.width - offset;
                            break;
                        case 'right':
                            top = rect.top + window.scrollY + (rect.height - tooltipRect.height) / 2;
                            left = rect.right + window.scrollX + offset;
                            break;
                    }

                    tooltipElement.style.position = 'absolute';
                    tooltipElement.style.top = `${top}px`;
                    tooltipElement.style.left = `${left}px`;
                };

                const showTooltip = () => {
                    createTooltip();
                    positionTooltip();
                };

                const hideTooltip = () => {
                    if (tooltipElement) {
                        document.body.removeChild(tooltipElement);
                        tooltipElement = null;
                    }
                };

                // Bind these methods to the element so they can be referenced in the unmounted hook
                el.__showTooltip__ = showTooltip;
                el.__hideTooltip__ = hideTooltip;
                el.__positionTooltip__ = positionTooltip;

                el.addEventListener('mouseenter', showTooltip);
                el.addEventListener('mouseleave', hideTooltip);
                window.addEventListener('resize', positionTooltip); // Update position on resize
            },
            unmounted(el) {
                el.removeEventListener('mouseenter', el.__showTooltip__);
                el.removeEventListener('mouseleave', el.__hideTooltip__);
                window.removeEventListener('resize', el.__positionTooltip__);

                // Clean up
                delete el.__showTooltip__;
                delete el.__hideTooltip__;
                delete el.__positionTooltip__;
            }
        });
    }
};

export default Tooltip;
