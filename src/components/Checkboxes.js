import React, { useState, useEffect } from "react";
import { Checkbox, Form, Grid, Container, Divider } from "semantic-ui-react";

const Checkboxes = () => {
  const [good, setGood] = useState(false);
  const [bad, setBad] = useState(false);
  const [ugly, setUgly] = useState(false);
  const [disableGood, setDisableGood] = useState(false);
  const [disableBad, setDisableBad] = useState(false);
  const [disableUgly, setDisableUgly] = useState(false);

  const handleGood = () => {
    if (good === false) {
      return setGood(true);
    }
    setDisableBad(false);
    setDisableUgly(false);
    setGood(false);
  };

  const handleBad = () => {
    if (bad === false) {
      return setBad(true);
    }
    setDisableGood(false);
    setDisableUgly(false);
    setBad(false);
  };

  const handleUgly = () => {
    if (ugly === false) {
      return setUgly(true);
    }
    setDisableBad(false);
    setDisableGood(false);
    setUgly(false);
  };

  useEffect(() => {
    if (good && bad === true) {
      setDisableUgly(true);
    } else if (bad && ugly === true) {
      setDisableGood(true);
    } else if (ugly && good === true) {
      setDisableBad(true);
    }
  }, [good, bad, ugly]);

  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form>
              <Form.Field>
                Choose Only <strong>TWO</strong>
              </Form.Field>
              <Form.Field inline>
                <Checkbox
                  toggle
                  label="The Good (or Quality)"
                  onChange={handleGood}
                  disabled={disableGood ? true : null}
                />
              </Form.Field>
              <Form.Field inline>
                <Checkbox
                  toggle
                  label="The Bad (or Speed)"
                  onChange={handleBad}
                  disabled={disableBad ? true : null}
                />
              </Form.Field>
              <Form.Field inline>
                <Checkbox
                  toggle
                  label="The Ugly (or Cost)"
                  onChange={handleUgly}
                  disabled={disableUgly ? true : null}
                />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Divider />
            {good && bad ? (
              <p>
                If you want to do things to a very good quality at a fast pace
                means that you will need to invest a great deal of money.
                Expensive and not a good long term solution.
              </p>
            ) : null}
            {good && ugly ? (
              <p>
                This is by far the best option to do everything in life. Its
                inexpensive. One learns everything related to it for life. It is
                a solid decision for long term happiness.
              </p>
            ) : null}
            {ugly && bad ? (
              <p>
                Don't bother. If anyone asks you to do it this way, tell them to
                find someone else. They are not for you. It will only end in
                tears.
              </p>
            ) : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Checkboxes;
