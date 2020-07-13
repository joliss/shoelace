import { Component, Event, EventEmitter, Method, Prop, State, Watch, h } from '@stencil/core';

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The checkbox's label.
 *
 * @part base - The component's base wrapper.
 * @part control - The checkbox control.
 * @part checked-icon - The container the wraps the checked icon.
 * @part indeterminate-icon - The container that wraps the indeterminate icon.
 * @part label - The checkbox label.
 */

@Component({
  tag: 'sl-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})
export class Checkbox {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  inputId = `checkbox-${++id}`;
  labelId = `checkbox-label-${id}`;
  input: HTMLInputElement;

  @State() hasFocus = false;

  /** The checkbox's name attribute. */
  @Prop() name: string;

  /** The checkbox's value attribute. */
  @Prop() value: string;

  /** Set to true to disable the checkbox. */
  @Prop() disabled = false;

  /** Set to true to draw the checkbox in a checked state. */
  @Prop({ mutable: true }) checked = false;

  /** Set to true to draw the checkbox in an indeterminate state. */
  @Prop({ mutable: true }) indeterminate = false;

  /** Emitted when the control loses focus. */
  @Event() slBlur: EventEmitter;

  /** Emitted when the control's checked state changes. */
  @Event() slChange: EventEmitter;

  /** Emitted when the control gains focus. */
  @Event() slFocus: EventEmitter;

  @Watch('checked')
  @Watch('indeterminate')
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.slChange.emit();
  }

  componentDidLoad() {
    this.input.indeterminate = this.indeterminate;
  }

  /** Sets focus on the checkbox. */
  @Method()
  async setFocus() {
    this.input.focus();
  }

  /** Removes focus from the checkbox. */
  @Method()
  async removeFocus() {
    this.input.blur();
  }

  handleClick() {
    this.checked = this.input.checked;
    this.indeterminate = this.input.indeterminate;
  }

  handleBlur() {
    this.hasFocus = false;
    this.slBlur.emit();
  }

  handleFocus() {
    this.hasFocus = true;
    this.slFocus.emit();
  }

  handleMouseDown(event: MouseEvent) {
    // Prevent clicks on the label from briefly blurring the input
    event.preventDefault();
    this.input.focus();
  }

  render() {
    return (
      <label
        part="base"
        class={{
          checkbox: true,
          'checkbox--checked': this.checked,
          'checkbox--disabled': this.disabled,
          'checkbox--focused': this.hasFocus,
          'checkbox--indeterminate': this.indeterminate
        }}
        htmlFor={this.inputId}
        role="checkbox"
        onMouseDown={this.handleMouseDown}
      >
        <span part="control" class="checkbox__control">
          {this.checked && (
            <span part="checked-icon" class="checkbox__icon">
              <svg viewBox="0 0 16 16">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g stroke="currentColor" stroke-width="2">
                    <g transform="translate(3.428571, 3.428571)">
                      <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                      <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          )}

          {!this.checked && this.indeterminate && (
            <span part="indeterminate-icon" class="checkbox__icon">
              <svg viewBox="0 0 16 16">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                  <g stroke="currentColor" stroke-width="2">
                    <g transform="translate(2.285714, 6.857143)">
                      <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          )}

          <input
            ref={el => (this.input = el)}
            id={this.inputId}
            type="checkbox"
            name={this.name}
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            aria-labeledby={this.labelId}
            onClick={this.handleClick}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
          />
        </span>

        <span part="label" id={this.labelId} class="checkbox__label">
          <slot />
        </span>
      </label>
    );
  }
}
